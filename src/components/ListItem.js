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

  goToSelectedItemPage(data) {
    console.log(data);
    Actions.selectedItem(data);
  }
  constructor(props){
    super()
  }
  render() {
    const { titleStyle } = styles;
    const { id, author, thumbnail } = this.props.item.data;
    const { data } = this.props.item;
    const {
      thumbnailStyle, 
      headerContentStyle,
      thumbnailContainerStyle,
      headerTextStyle,
      imageStyle
    } = styles;    
    return (
    <TouchableWithoutFeedback
      onPress={() => this.goToSelectedItemPage(data)}
    >
      <View>
      <Card>
        <CardSection>
        <View>
          <Image 
          style={ thumbnailStyle }
          source={{uri: thumbnail}}
          />
        </View>        
          <Text style={  titleStyle }>
            {author}
          </Text>
        </CardSection>
      </Card>
    </View>
    </TouchableWithoutFeedback>
    
    );
  }
}


const mapStateToProps = (state, ownProps) => {
  const selected = state.selectedItemId === ownProps.item.data.id
  // return { selectedItemId: state.selectedItemId };
  return { selected }
};

export default connect(mapStateToProps, actions)(ListItem);

const styles = {
  titleStyle: {
    fontSize: 18, 
    paddingLeft: 15
  },  
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
}
