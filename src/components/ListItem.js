import React, { Component } from 'react';
import { Text, Image, View, TouchableWithoutFeedback, LayoutAnimation }  from 'react-native'
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import * as actions from '../actions';

import timeDifference from './helpers';

import { CardSection, Card, Button } from './common';

/* Use ComponentWillMount LayourAnimation for transition */
/*Refactor to use Touchable opacity instead of touchable without feedback */
class ListItem extends Component {
  goToSelectedItemPage(data) {
    Actions.selectedItem(data);
  }
  render() {
    const { titleStyle } = styles;
    const { url, id, author, thumbnail, title, ups, num_comments, domain, created_utc, downs, subreddit_name_prefixed } = this.props.item.data;
    const { data } = this.props.item;
    const {
      headerContentStyle,
      headerTextStyle,
      imageStyle,
      articleDetails
    } = styles;    
    return (
    <TouchableWithoutFeedback
      onPress={ () => this.goToSelectedItemPage(data) }
    >
    <View>
      <Card>
      <CardSection>
        <Image 
          source={{ uri: thumbnail }}
          style={ imageStyle } 
        />
      </CardSection>        
        <CardSection>
          <View style={ headerContentStyle }>
            <Text 
              numberOfLines={ 2 } 
              style={ headerTextStyle }>{ title }
            </Text>   
            <Text style={{fontSize: 10}}>{'(' + domain + ')'}</Text>     
          </View>
        </CardSection>
        <CardSection>
          <View>
            <Text style={{fontSize: 12}}> Submitted by { author } { timeDifference(created_utc) } to { subreddit_name_prefixed }</Text>
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
    justifyContent: 'space-around',
    flex: 1
  },
  headerTextStyle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  imageStyle: {
    height: 200,
    flex: 1,
    width: null
  },
  articleDetails: {
    fontSize: 10
  }
}
