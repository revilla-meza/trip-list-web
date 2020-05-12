import request from '../util/fetch';
export const FETCH_TRIPS_START = 'FETCH_TRIPS_START';
export const FETCH_TRIPS_SUCCESS = 'FETCH_TRIPS_SUCCESS';
export const FETCH_TRIPS_ERROR = 'FETCH_TRIPS_ERROR';
const fetchTrips = () => async (dispatch: any, getState: any) => {
  const { userId } = getState().user;
  dispatch({ type: FETCH_TRIPS_START });

  try {
    const trips = await request({ method: 'GET', apiDomain: 'https://api.gottapackup.com', path: '/trip', userId });

    dispatch({ payload: trips, type: FETCH_TRIPS_SUCCESS });
  } catch (e) {
    dispatch({ type: FETCH_TRIPS_ERROR });
  }
};

export default fetchTrips;
