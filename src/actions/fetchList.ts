import request from '../util/fetch';

export const FETCH_LIST_START = 'FETCH_LIST_START';
export const FETCH_LIST_SUCCESS = 'FETCH_LIST_SUCCESS';
export const FETCH_LIST_ERROR = 'FETCH_LIST_ERROR';

const fetchList = (listId: any) => async (dispatch: any, getState: any) => {
  const { userId } = getState().user;
  dispatch({ type: FETCH_LIST_START });
  try {
    const list = await request({
      method: 'GET',
      apiDomain: 'https://api.gottapackup.com',
      path: `/list/${listId}`,
      userId,
    });
    dispatch({ payload: list, type: FETCH_LIST_SUCCESS });
  } catch (e) {
    dispatch({ type: FETCH_LIST_ERROR });
  }
};

export default fetchList;
