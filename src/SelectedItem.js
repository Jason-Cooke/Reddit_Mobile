import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Card, CardSection, Header } from './components/common';
export default class SelectedItem extends Component {
  render() {
    const { title, author, thumbnail } = this.props;
    const {
      thumbnailStyle, 
      headerContentStyle,
      thumbnailContainerStyle,
      headerTextStyle,
      imageStyle,
      aligner
    } = styles;
    
    return (
      <Card style={ aligner }>     
        <CardSection> 
          <View>
            <Image 
            style={ thumbnailStyle }
            source={{uri: thumbnail}}
            />
          </View>

        </CardSection>
      </Card>
    )
  }
}

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
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
    width: null
  },
  aligner: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
    width: 200
  }
}