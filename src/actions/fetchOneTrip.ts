import request from '../util/fetch';
export const FETCH_ONE_TRIP_START = 'FETCH_ONE_TRIP_START';
export const FETCH_ONE_TRIP_SUCCESS = 'FETCH_ONE_TRIP_SUCCESS';
export const FETCH_ONE_TRIP_ERROR = 'FETCH_ONE_TRIP_ERROR';

const fetchOneTrip = (tripId: any) => async (dispatch: any, getState: any) => {
  const { userId } = getState().user;
  dispatch({ type: FETCH_ONE_TRIP_START });
  try {
    const trip = await request({
      method: 'GET',
      apiDomain: 'https://api.gottapackup.com',
      path: `/trip/${tripId}`,
      userId,
    });
    dispatch({ payload: trip, type: FETCH_ONE_TRIP_SUCCESS });
  } catch (e) {
    dispatch({ type: FETCH_ONE_TRIP_START });
  }
};

export default fetchOneTrip;
