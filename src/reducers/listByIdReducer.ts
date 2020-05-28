import { requestStatus } from '../types/index';
import { FETCH_LIST_SUCCESS, FETCH_LIST_START, FETCH_LIST_ERROR } from '../actions/fetchList';
import { CREATE_TRIP_SUCCESS } from '../actions/createTrip';
export type ListActions = 'FETCH_LIST_SUCCESS' | 'FETCH_LIST_START' | 'FETCH_LIST_ERROR' | 'CREATE_TRIP_SUCCESS';
export interface ListState {
  byId: any;
  getListStatus: requestStatus;
}

interface ListAction {
  type: ListActions;
  payload?: any;
}

const initialState = {
  byId: {},
  getListStatus: requestStatus.loading,
};

const listByIdReducer = (state = initialState, action: ListAction): ListState => {
  switch (action.type) {
    case FETCH_LIST_START:
      return { ...state, getListStatus: requestStatus.loading };
    case FETCH_LIST_SUCCESS:
      return { byId: action.payload, getListStatus: requestStatus.success };
    case FETCH_LIST_ERROR:
      return { ...state, getListStatus: requestStatus.error };
    case CREATE_TRIP_SUCCESS:
      return {
        byId: { ...state.byId, [action.payload.listId]: action.payload.list },
        getListStatus: requestStatus.success,
      };
    default:
      return state;
  }
};

export default listByIdReducer;
