import { requestStatus } from '../types/index';
import { FETCH_TRIPS_START, FETCH_TRIPS_SUCCESS, FETCH_TRIPS_ERROR } from '../actions/fetchTrips';
import { FETCH_ONE_TRIP_START, FETCH_ONE_TRIP_SUCCESS, FETCH_ONE_TRIP_ERROR } from '../actions/fetchOneTrip';

import { CREATE_TRIP_SUCCESS } from '../actions/createTrip';
export type tripsActions =
  | 'FETCH_TRIPS_START'
  | 'FETCH_TRIPS_SUCCESS'
  | 'FETCH_TRIPS_ERROR'
  | 'CREATE_TRIP_SUCCESS'
  | 'FETCH_ONE_TRIP_ERROR'
  | 'FETCH_ONE_TRIP_START'
  | 'FETCH_ONE_TRIP_SUCCESS';

export interface TripsState {
  ids?: any;
  byId?: any;
  getTripsStatus: requestStatus;
  getOneTripStatus: requestStatus;
}

interface TripsAction {
  type: tripsActions;
  payload?: any;
}
const initialState = {
  ids: [],
  byId: {},
  getTripsStatus: requestStatus.ready,
  getOneTripStatus: requestStatus.ready,
};

const tripsReducer = (state = initialState, action: TripsAction): TripsState => {
  switch (action.type) {
    case FETCH_TRIPS_START:
      return { ...state, getTripsStatus: requestStatus.loading };
    case FETCH_TRIPS_SUCCESS:
      const newState = action.payload.reduce(
        (output: any, el: any) => {
          output.ids.push(el.id);
          output.byId[el.id] = el;
          return output;
        },
        { ids: [], byId: {} },
      );
      return { ...newState, getTripsStatus: requestStatus.success };
    case FETCH_TRIPS_ERROR:
      return { ...state, getTripsStatus: requestStatus.error };
    case CREATE_TRIP_SUCCESS:
      return {
        ...state,
        ids: [...state.ids, action.payload.id],
        byId: { ...state.byId, [action.payload.id]: action.payload },
        getTripsStatus: requestStatus.success,
      };
    case FETCH_ONE_TRIP_START:
      return {
        ...state,
        getOneTripStatus: requestStatus.loading,
      };
    case FETCH_ONE_TRIP_SUCCESS:
      const newTrip = { ...action.payload, list: undefined };
      return {
        ...state,
        getOneTripStatus: requestStatus.success,
        byId: { ...state.byId, [newTrip.id]: newTrip },
      };
    case FETCH_ONE_TRIP_ERROR:
      return { ...state, getOneTripStatus: requestStatus.error };
    default:
      return state;
  }
};

export default tripsReducer;
