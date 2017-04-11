import React, { Component } from 'react';
import { View, Text, Navigator, AsyncStorage } from 'react-native'
import { Router, Scene } from 'react-native-router-flux';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { persistStore, autoRehydrate } from 'redux-persist';

import reducers from './reducers';
import SelectedItem from './components/SelectedItem';
import ItemsList from './components/ItemsList';

export default class App extends Component {
  render() {
    const store = createStore(reducers, undefined, compose(applyMiddleware(ReduxThunk, createLogger()), autoRehydrate()));
    persistStore(store, { storage: AsyncStorage }); //initialize storage on initial render

    return (
    <Provider store={ store }>    
      <Router>
        <Scene key="root">
          <Scene key="mainScreen" component={ ItemsList } title="popular" initial={ true } sceneStyle={ styles.sceneStyle }/>
          <Scene key="selectedItem" component={ SelectedItem } title="SelectedItem" sceneStyle={ styles.sceneStyle }/>
        </Scene>
      </Router>
    </Provider>
    );
  }
}

/*
This styles was created in order to fix issue of the NavBar overlaying content on the screen
https://github.com/aksonov/react-native-router-flux/issues/103
*/
const styles = {
  sceneStyle: {
    paddingTop: Navigator.NavigationBar.Styles.General.TotalNavHeight    
  }
};