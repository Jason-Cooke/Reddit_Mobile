export default (state = {}, action) => {
  switch (action.type) { 
  case 'select_item':
    return action.payload;
  default:
    return state;
  }
};