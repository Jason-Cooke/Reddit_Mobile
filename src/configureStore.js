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
        createLogger() 
    ), 
      autoRehydrate() // fetches local content from AsyncStorage to display before fetching new content
    ) 
  );
}
export default configureStore