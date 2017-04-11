import { combineReducers } from 'redux';
import ItemsReducer from './ItemsReducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
  items: ItemsReducer,
}) ;