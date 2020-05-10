import request from '../util/fetch';

export const CREATE_USER_START = 'CREATE_USER_START';
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const CREATE_USER_ERROR = 'CREATE_USER_ERROR';

const createUser = (email: string) => async (dispatch: any, getState: any) => {
  const body = { email };
  try {
    const user = await request({ method: 'POST', apiDomain: 'https://api.gottapackup.com', path: '/user', body });

    dispatch({ payload: user, type: 'CREATE_USER_SUCCESS' });
  } catch (e) {
    dispatch({ type: 'CREATE_USER_ERROR' });
  }
};

export default createUser;
