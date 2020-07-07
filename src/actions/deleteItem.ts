import request from '../util/fetch';

export const DELETE_ITEM_START = 'DELETE_ITEM_START';
export const DELETE_ITEM_SUCCESS = 'DELETE_ITEM_SUCCESS';
export const DELETE_ITEM_ERROR = 'DELETE_ITEM_ERROR';

const deleteItem = (itemId: any, listId: any, itemIds: any) => async (dispatch: any, getState: any) => {
  const { userId } = getState().user;
  dispatch({ type: DELETE_ITEM_START });
  try {
    const deletedItem = await request({
      method: 'DELETE',
      apiDomain: 'https://api.gottapackup.com',
      path: `/item/${itemId}`,
      userId,
    });
    dispatch({ payload: { itemId, itemIds, listId }, type: DELETE_ITEM_SUCCESS });
  } catch (e) {
    dispatch({ type: DELETE_ITEM_ERROR });
  }
};

export default deleteItem;
