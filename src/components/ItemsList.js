import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class ItemsList extends Component {
  
  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    // place ajax call in here;
    this.dataSource = ds.cloneWithRows(this.props.items);
  }
  
  renderRow(item) {
    return <ListItem item={item}/>;
  }

  render() {
    return(
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}
const mapStateToProps = state => {
  return {items: state.items};
};

export default connect(mapStateToProps)(ItemsList);