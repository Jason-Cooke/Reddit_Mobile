import React, { Component } from 'react';
import { ListView, View, Text, ScrollView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';
import { fetchPosts } from '../actions'
import { Spinner } from './common'

import { response } from '../reducers/sample.json' // remove this, sample data 

class ItemsList extends Component {
  
  componentDidMount() {
    this.props.fetchPosts()
  }

  renderRow(item) {
    return <ListItem item={item}/>;
  }

  render() {
    const { isFetching } = this.props;
    return(
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
        {!isFetching && 
        <ListView
          dataSource={ this.props.items }
          renderRow={ this.renderRow }
          enableEmptySections={ true }
        />}
        </View>
        {isFetching && <View style={{ flex: 1 }}>
          <Spinner/>
        </View>}
      </View>
    );
  }
}
const dataSource = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2,
});

const mapStateToProps = state => {
  const {posts, isFetching} = state.items;
  return {items: dataSource.cloneWithRows(posts), isFetching: isFetching};
};

export default connect(mapStateToProps, { fetchPosts })(ItemsList);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
});
