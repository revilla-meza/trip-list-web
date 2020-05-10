import request from '../util/fetch';

export const GET_USER_START = 'GET_USER_START';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_ERROR = 'GET_USER_ERROR';

const getUserByEmail = (email: string) => async (dispatch: any, getState: any) => {
  const extraHeaders = { email };
  try {
    const user = await request({
      method: 'GET',
      apiDomain: 'https://api.gottapackup.com',
      path: '/user/signin/email',
      extraHeaders,
    });

    dispatch({ payload: user, type: 'GET_USER_SUCCESS' });
  } catch (e) {
    dispatch({ type: 'GET_USER_ERROR' });
  }
};

export default getUserByEmail;
