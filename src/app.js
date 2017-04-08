import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import {View, Text} from 'react-native'

import SelectedItem from './SelectedItem';
import ItemsList from './components/ItemsList';

export default class App extends Component {
  render() {
    return (
    <Provider store={createStore(reducers)}>    
      <Router>
        <Scene key="root">
          <Scene key="mainScreen" component={ItemsList} title="Articles" initial={true} />
          <Scene key="selectedItem" component={SelectedItem} title="SelectedItem" />
        </Scene>
      </Router>
    </Provider>
    )
  }
}