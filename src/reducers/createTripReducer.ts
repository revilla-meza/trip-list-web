import { requestStatus } from '../types/index';
import { CREATE_TRIP_START, CREATE_TRIP_SUCCESS, CREATE_TRIP_ERROR, RESET_TRIP_REQUEST_STATUS } from '../actions/createTrip';
export type createTripActions = 'CREATE_TRIP_START' | 'CREATE_TRIP_SUCCESS' | 'CREATE_TRIP_ERROR' | 'RESET_TRIP_REQUEST_STATUS';

export interface CreateTripState {
  newTrip: any;
  getCreateTripStatus: requestStatus;
}

// eslint-disable-next-line @typescript-eslint/class-name-casing
interface createTripAction {
  type: createTripActions;
  payload?: any;
}
const initialState = {
  newTrip: {},
  getCreateTripStatus: requestStatus.ready,
};

const createTripReducer = (state = initialState, action: createTripAction): CreateTripState => {
  switch (action.type) {
    case CREATE_TRIP_START:
      return { ...state, getCreateTripStatus: requestStatus.loading };
    case CREATE_TRIP_SUCCESS:
      return { newTrip: action.payload, getCreateTripStatus: requestStatus.success };
    case CREATE_TRIP_ERROR:
      return { ...state, getCreateTripStatus: requestStatus.error };
    case RESET_TRIP_REQUEST_STATUS:
      return { ...state, getCreateTripStatus: requestStatus.ready };
    default:
      return state;
  }
};

export default createTripReducer;
