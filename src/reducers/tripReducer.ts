export const FETCH_TRIPS_START = 'FETCH_TRIPS_START';
export const FETCH_TRIPS_SUCCESS = 'FETCH_TRIPS_SUCCESS';
export const FETCH_TRIPS_ERROR = 'FETCH_TRIPS_ERROR';

export type tripActions = 'FETCH_TRIPS_START' | 'FETCH_TRIPS_SUCCESS' | 'FETCH_TRIPS_ERROR';

export interface TripState {
  trips?: any;
  status: tripStatus;
}

export enum tripStatus {
  loading = 'loading',
  succsess = 'success',
  error = 'error',
}

interface TripAction {
  type: tripActions;
  payload?: any;
}
const initialState = {
  trips: [],
  status: tripStatus.loading,
};

const tripReducer = (state = initialState, action: TripAction): TripState => {
  switch (action.type) {
    case FETCH_TRIPS_START:
      return { ...state, status: tripStatus.loading };
    case FETCH_TRIPS_SUCCESS:
      return { trips: action.payload, status: tripStatus.succsess };
    case FETCH_TRIPS_ERROR:
      return { ...state, status: tripStatus.error };
    default:
      return state;
  }
};

export default tripReducer;
