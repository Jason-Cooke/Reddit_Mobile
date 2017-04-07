import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

import PageOne from './PageOne';
import PageTwo from './PageTwo';
import ItemsList from './components/ItemsList';
import SelectedItem from './components/SelectedItem';

export default class App extends Component {
  render() {
    return (
    <Provider store={createStore(reducers)}>  
      <Router>
        <Scene key="root">
          <Scene key="pageOne" component={ItemsList} title="ItemList" initial={true} />
          <Scene key="pageTwo" component={PageTwo} title="PageTwo" />
        </Scene>
      </Router>
    </Provider>  
    )
  }
}