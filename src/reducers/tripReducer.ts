import { requestStatus } from '../types/index';
import { FETCH_TRIPS_START, FETCH_TRIPS_SUCCESS, FETCH_TRIPS_ERROR } from '../actions/fetchTrips';
export type tripsActions = 'FETCH_TRIPS_START' | 'FETCH_TRIPS_SUCCESS' | 'FETCH_TRIPS_ERROR';

export interface TripsState {
  trips?: any;
  getTripsStatus: requestStatus;
}

interface TripsAction {
  type: tripsActions;
  payload?: any;
}
const initialState = {
  trips: [],
  getTripsStatus: requestStatus.loading,
};

const tripsReducer = (state = initialState, action: TripsAction): TripsState => {
  switch (action.type) {
    case FETCH_TRIPS_START:
      return { ...state, getTripsStatus: requestStatus.loading };
    case FETCH_TRIPS_SUCCESS:
      return { trips: action.payload, getTripsStatus: requestStatus.succsess };
    case FETCH_TRIPS_ERROR:
      return { ...state, getTripsStatus: requestStatus.error };
    default:
      return state;
  }
};

export default tripsReducer;
