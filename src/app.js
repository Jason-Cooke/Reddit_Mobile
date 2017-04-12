import React, { Component } from 'react';
import { 
  View, 
  Text, 
  Navigator, 
  AsyncStorage 
} from 'react-native'
import { Router, Scene } from 'react-native-router-flux';

import { persistStore, autoRehydrate } from 'redux-persist';
import { Provider } from 'react-redux';

import SelectedItem from './components/SelectedItem';
import ItemsList from './components/ItemsList';
import configureStore from './configureStore'; 

// This is the entry point into the app

export default class App extends Component {
  render() {
    
    const store = configureStore(); // Create instance of store on render
    persistStore(store, { storage: AsyncStorage }); // method from redux-persist to store data in AsyncStorage
    const { 
      navBar, 
      sceneStyle, 
      navTitle 
    } = styles;

    return (
    <Provider store={ store }>    
      <Router 
        navigationBarStyle={ navBar }
        titleStyle={ navTitle }
      >
        <Scene key="root">
          <Scene 
            key="mainScreen" 
            component={ ItemsList } 
            title="trending" 
            initial={ true } 
            sceneStyle={ sceneStyle }
          />
          <Scene 
            key="selectedItem" 
            component={ SelectedItem } 
            title="SelectedItem" 
            sceneStyle={ sceneStyle }
          />
        </Scene>
      </Router>
    </Provider>
    );
  }
}

const styles = {
  navTitle: {
    color: '#657786', 
    fontWeight: 'bold',
    fontSize: 18
  },
  navBar: {
    flex: 1,
    backgroundColor: '#f5f8fa',
  },
  sceneStyle: {
    paddingTop: Navigator.NavigationBar.Styles.General.TotalNavHeight    
  }
};
/*
sceneStyle was created in order to fix issue of the NavBar overlaying content on the screen
https://github.com/aksonov/react-native-router-flux/issues/103
*/
