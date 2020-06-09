import request from '../util/fetch';

export const CREATE_ITEM_START = 'CREATE_ITEM_START';
export const CREATE_ITEM_SUCCESS = 'CREATE_ITEM_SUCCESS';
export const CREATE_ITEM_ERROR = 'CREATE_ITEM_ERROR';

const createItem = (newItem: any) => async (dispatch: any, getState: any) => {
  const body = newItem;
  const { userId } = getState().user;
  dispatch({ type: 'CREATE_ITEM_START' });
  try {
    const addItem = await request({
      method: 'POST',
      apiDomain: 'https://api.gottapackup.com',
      path: '/item',
      userId,
      body,
    });
    dispatch({ payload: addItem, type: 'CREATE_ITEM_SUCCESS' });
  } catch (e) {
    dispatch({ type: 'CREATE_ITEM_ERROR' });
  }
};

export default createItem;
