import React, { Component } from 'react';
import { Text, Image, View, TouchableWithoutFeedback, LayoutAnimation, Dimensions }  from 'react-native'
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import * as actions from '../actions';

import { timeDifference, validateImage } from './helpers';

import { CardSection, Card, Button } from './common';

/* Use ComponentWillMount LayourAnimation for transition */
/*Refactor to use Touchable opacity instead of touchable without feedback */
class ListItem extends Component {
  goToSelectedItemPage(data) {
    Actions.selectedItem(data);
  };

  render() {
    const { titleStyle } = styles;
    const { url, id, author, thumbnail, title, ups, num_comments, domain, created_utc, downs, subreddit_name_prefixed } = this.props.item.data;
    const { data } = this.props.item;
    const {
      postInfo,
      headerContentStyle,
      headerTextStyle,
      imageStyle,
      articleDetails,
      thumbnailStyle,
      headerContainerStyle
    } = styles;    
    return (
    <TouchableWithoutFeedback
      onPress={ () => this.goToSelectedItemPage(data) }
    >
    <View>
      <Card>
      <CardSection>
        <View style={ headerContainerStyle }>
          <Text 
            numberOfLines={ 4 } 
            style={ headerTextStyle }>{ title }
          </Text>   
          <Image 
            source={ validateImage(this.props.item.data.thumbnail) }
            style={ thumbnailStyle } 
          />
        </View>
      </CardSection>        
        <CardSection>
          <View>
            <Text style={ postInfo }> Submitted by { author } { timeDifference(created_utc) } to { subreddit_name_prefixed }</Text>
          </View>
        </CardSection>  
        <CardSection>      
            <Text style={ articleDetails }> Upvotes: { ups.toLocaleString() } |</Text>
            <Text style={ articleDetails }> Downvotes: { downs.toLocaleString() } |</Text>              
            <Text style={ articleDetails }> Comments: { num_comments.toLocaleString() }</Text>
        </CardSection>
      </Card>
    </View>
    </TouchableWithoutFeedback>
    );
  }
}


const mapStateToProps = (state, ownProps) => {
  const selected = state.selectedItemId === ownProps.item.data.id
  return { selected }
};

export default connect(mapStateToProps, actions)(ListItem);
const { height, width } = Dimensions.get('window');
const styles = {
  titleStyle: {
    fontSize: 18, 
    paddingLeft: 15,
    color: '#F0F8FF'
  },  
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    flex: 1
  },
  headerTextStyle: {
    fontSize: 18,
    fontWeight: '600',
    width: Math.round(width * .66),
    color: '#657786'
  },
  imageStyle: {
    height: 200,
    flex: 1,
    width: null
  },
  thumbnailStyle: {
    height: 80,
    width: 80,
    borderRadius: 4
  },
  articleDetails: {
    fontSize: 10,
    color: '#657786'
  },
  headerContainerStyle: {
    display: 'flex', 
    flexDirection: 'row', 
    flex: 1, 
    justifyContent: 'space-between', 
    paddingRight: 4, 
    paddingLeft: 4, 
    paddingTop: 4
  },
  postInfo: {
    fontSize: 12,
    color: '#657786'
  }
}
