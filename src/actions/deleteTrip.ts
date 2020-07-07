import request from '../util/fetch';

export const DELETE_TRIP_SUCCESS = 'DELETE_TRIP_SUCCESS';
export const DELETE_TRIP_ERROR = 'DELETE_TRIP_ERROR';

const deleteTrip = (tripId: any) => async (dispatch: any, getState: any) => {
  try {
    const deletedTrip = await request({
      method: 'DELETE',
      apiDomain: 'https://api.gottapackup.com',
      path: `/trip/${tripId}`,
    });
    dispatch({ payload: tripId, type: DELETE_TRIP_SUCCESS });
  } catch (e) {
    dispatch({ type: DELETE_TRIP_ERROR });
  }
};

export default deleteTrip;
