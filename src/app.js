import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import reducers from './reducers';
import {View, Text} from 'react-native'

import SelectedItem from './SelectedItem';
import ItemsList from './components/ItemsList';

export default class App extends Component {

  render() {
  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk, createLogger()));
    return (
    <Provider store={ store }>    
      <Router>
        <Scene key="root">
          <Scene key="mainScreen" component={ItemsList} title="reddit" initial={true} />
          <Scene key="selectedItem" component={SelectedItem} title="SelectedItem" />
        </Scene>
      </Router>
    </Provider>
    )
  }
}

