export const SET_ITEM_STATE = 'SET_ITEM_STATE';

const setItemState = ({listId, itemId, state}:any) => {
  return {
    type: SET_ITEM_STATE,
    payload: {
      listId,
      itemId,
      state
    }
  };
};

export default setItemState;
