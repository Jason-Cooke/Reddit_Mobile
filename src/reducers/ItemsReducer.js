import response from './sample.json';
import { REQUEST_POSTS, RECEIVE_POSTS } from '../actions';


export default (state = { 
  isFetching: true,
  posts: []
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