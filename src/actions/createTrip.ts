import request from '../util/fetch';

export const CREATE_TRIP_START = 'CREATE_TRIP_START';
export const CREATE_TRIP_SUCCESS = 'CREATE_TRIP_SUCCESS';
export const CREATE_TRIP_ERROR = 'CREATE_TRIP_ERROR';
export const RESET_TRIP_REQUEST_STATUS = 'RESET_TRIP_REQUEST_STATUS';

const createTrip = (newTrip: any) => async (dispatch: any, getState: any) => {
  const body = newTrip;
  const { userId } = getState().user;
  dispatch({ type: 'CREATE_TRIP_START' });
  try {
    const addTrip = await request({
      method: 'POST',
      apiDomain: 'https://api.gottapackup.com',
      path: '/trip',
      userId,
      body,
    });
    dispatch({ payload: addTrip, type: 'CREATE_TRIP_SUCCESS' });
    dispatch({ type: RESET_TRIP_REQUEST_STATUS });
  } catch (e) {
    dispatch({ type: 'CREATE_TRIP_ERROR' });
  }
};

export default createTrip;
