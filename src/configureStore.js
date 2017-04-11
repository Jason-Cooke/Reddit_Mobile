import { 
  createStore, 
  applyMiddleware, 
  compose 
} from 'redux';
import ReduxThunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { persistStore, autoRehydrate } from 'redux-persist';
import reducers from './reducers';

const configureStore = () => {
  return createStore(
    reducers, 
    undefined, // initial state will be undefined, to let autoRehydrate to first check local storage if previous state exists
    compose(
      applyMiddleware(
        ReduxThunk, 
        createLogger() // for development purposes to see redux actions in debugging mode
    ), 
    autoRehydrate()) // fn from redux-persist to fill state first from local storage before fetch request is received
  );
}
export default configureStore