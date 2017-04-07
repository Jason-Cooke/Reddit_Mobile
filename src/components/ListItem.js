import React, { Component } from 'react';
import { Text, Image, View, TouchableWithoutFeedback, LayoutAnimation }  from 'react-native'
import { connect } from 'react-redux';
import { CardSection, Card, Button } from './common';
import * as actions from '../actions';
import { Actions } from 'react-native-router-flux';


/* Use ComponentWillMount LayourAnimation for transition */
/*Refactor to use Touchable opacity instead of touchable without feedback */
class ListItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring();
  }
  renderDescription() {
    // Actions.pageTwo({text: 'hello world!'})
    console.log(this.props)
    const { selected } = this.props;
    if (selected) {
    /*Pass this data to the next screen*/
      console.log(this.props.item);

      return (
        <Text>{this.props.item.data.author}</Text>
      );
    };
  }
  goToSelectedItemPage(id) {
    this.props.selectItem(id);
  }
  constructor(props){
    super()
  }
  render() {
    const { titleStyle } = styles;
    const { id, author } = this.props.item.data
    return (
    <TouchableWithoutFeedback
      onPress={() => this.props.selectItem(id)}
    >
      <View>
        <CardSection>
            <Text style={  titleStyle }>
              {author}
            </Text>
        </CardSection>
    </View>
    </TouchableWithoutFeedback>
    
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18, 
    paddingLeft: 15
  }
};

const mapStateToProps = (state, ownProps) => {
  const selected = state.selectedItemId === ownProps.item.data.id
  // return { selectedItemId: state.selectedItemId };
  return { selected }
};

export default connect(mapStateToProps, actions)(ListItem);

