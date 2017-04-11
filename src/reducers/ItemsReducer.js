import response from './sample.json';
import { REQUEST_POSTS, RECEIVE_POSTS } from '../actions';


export default (state = { 
  isFetching: true,
  posts: [],
  // isRefreshing: false // todo implement isRefreshing to keep state of list on refresh
}, action) => {
  switch (action.type) {
  case REQUEST_POSTS:
    return Object.assign({}, state, {
      isFetching: true,
      posts: []
    });
  case RECEIVE_POSTS:
    return Object.assign({}, state, {
      isFetching: false,
      posts: action.items,        
    });
  default:
    return state;
  }
};