import React, { Component } from 'react';
import { View, Text, Image, Linking } from 'react-native';
import { Card, CardSection, Header, Button } from './common';
import { timeDifference, validateImage } from './helpers';

export default class SelectedItem extends Component {
  render() {
    const { 
      url, 
      thumbnail, 
      title, 
      author, 
      created_utc, 
      num_comments, 
      ups, 
      downs, 
      domain, 
      subreddit_name_prefixed, 
      subreddit 
    } = this.props;
    const { 
      itemContainer, 
      headerContentStyle, 
      headerTextStyle, 
      imageStyle, 
      articleDetails, 
      linkDetails 
    } = styles;
    
    return (
      <View style={ itemContainer }>
        <Card>
          <CardSection>
            <Image
              source={ validateImage(thumbnail) }
              style={ imageStyle }
            />
          </CardSection>
          <CardSection>
            <Text style={ headerTextStyle }> 
              { title }
           </Text>            
          </CardSection>
          <CardSection style={ headerContentStyle }>
            <Text style={ articleDetails }> 
              Written by { author } 
              { timeDifference(created_utc) } to 
              { subreddit_name_prefixed }
            </Text>
          </CardSection >
          <CardSection style={ headerContentStyle }>
            <Text style={ articleDetails }> Subreddit: { subreddit } |</Text>
            <Text style={ linkDetails }
              onPress={() => Linking.openURL('http://' + domain)}
            > { domain }</Text>
          </CardSection>          
          <CardSection style={headerContentStyle}>      
              <Text 
                style={ articleDetails }
              > 
                Upvotes: { ups.toLocaleString() } | 
              </Text>
              <Text 
                style={ articleDetails }
              > 
                Downvotes: { downs.toLocaleString() } | 
              </Text>              
              <Text 
                style={ articleDetails }
              > 
                Comments: { num_comments.toLocaleString() } | 
              </Text>
          </CardSection>
          <CardSection>
          <Button 
            onPress={() => Linking.openURL(url)}
            children={'Read Full Article'}
          > 
          </Button>
      </CardSection>
        </Card>        
      </View>
    );
  }
}

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 19,
    fontWeight: '600',
    color: '#657786'
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: 300
  },
  articleDetails: {
    fontSize: 12,
    color: '#657786'
  },
  linkDetails: {
    color: '#008aff',
    fontSize: 13
  },
  itemContainer: { 
    flex: 1, 
    backgroundColor: '#f5f8fa' 
  }
};