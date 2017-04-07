import React, { Component } from 'react';

export const SelectedItem = () => {
  render(    
      <View style={{margin: 128}}>
        <Text>This is the SelectedItem!</Text>
        <Text>{this.props.text}</Text>
      </View>
  )
}