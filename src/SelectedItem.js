import React, { Component } from 'react';
import { View, Text, Image, Linking } from 'react-native';
import { Card, CardSection, Header, Button } from './components/common';
import timeDifference from './components/helpers';

export default class SelectedItem extends Component {
  render() {
    const { title, author, created_utc, num_comments, ups, downs, url, domain, subreddit_name_prefixed, subreddit } = this.props;
    const {
      thumbnailStyle, 
      headerContentStyle,
      thumbnailContainerStyle,
      headerTextStyle,
      imageStyle,
      aligner,
      articleDetails,
      linkDetails
    } = styles;
    return (
      <View>
        <Card>
          <CardSection>
            <Image
              source={{uri: url}}
              style={ imageStyle }
            />
          </CardSection>
          <CardSection>
            <Text style={headerTextStyle}> { title } </Text>            
          </CardSection>
          <CardSection style={headerContentStyle}>
            <Text> Written by {author} {timeDifference(created_utc)} to {subreddit_name_prefixed}</Text>
            <Text></Text>
          </CardSection >
          <CardSection style={headerContentStyle}>
            <Text style={ articleDetails }> Subreddit: {subreddit} |</Text>
            <Text style={ linkDetails }
              onPress={() => Linking.openURL('http://' + domain)}
            > { domain }  </Text>
          </CardSection>          
          <CardSection style={headerContentStyle}>      
              <Text style={ articleDetails }> Upvotes: { ups.toLocaleString() } |</Text>
              <Text style={ articleDetails }> Downvotes: { downs.toLocaleString() } |</Text>              
              <Text style={ articleDetails }> Comments: {num_comments.toLocaleString()} |</Text>
          </CardSection>
          <CardSection>
          <Button onPress={() => Linking.openURL(url)}> Read Full Article </Button>
      </CardSection>
        </Card>
        
      </View>
    )
  }
}

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 19,
    fontWeight: 'bold',
  },
  thumbnailStyle: {
    height: 100,
    width: 100
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
    width: 300
  },
  aligner: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
    width: 200
  },
  articleDetails: {
    fontSize: 12
  },
  linkDetails: {
    color: '#0000ff',
    fontSize: 13
  }
}