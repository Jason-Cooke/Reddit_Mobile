// pass an item id
export const selectItem = (id) => {
  return {
    type: 'select_item',
    payload: id
  };
};