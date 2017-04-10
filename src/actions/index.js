//use redux thunk to return the function;
export const fetchPosts = () => {
  return (dispatch) => {
    const redditAPI = 'https://www.reddit.com/.json';
    dispatch(requestPosts()) // check more into this
    return fetch(redditAPI)
      .then(response => response.json())
      .then(json => {
        dispatch(receivePosts(json));
      })
  }
};


export const REQUEST_POSTS = 'REQUEST_POSTS'
function requestPosts() {
  return {
    type: REQUEST_POSTS    
  }
};

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
function receivePosts(json) {
  return {
    type: RECEIVE_POSTS,
    items: json.data.children,
    receivedAt: Date.now()
  }
}
