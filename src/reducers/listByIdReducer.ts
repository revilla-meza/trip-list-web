import { requestStatus } from '../types/index';
import { FETCH_LIST_SUCCESS, FETCH_LIST_START, FETCH_LIST_ERROR } from '../actions/fetchList';
export type ListActions = 'FETCH_LIST_SUCCESS' | 'FETCH_LIST_START' | 'FETCH_LIST_ERROR';
export interface ListState {
  listData: any;
  getListStatus: requestStatus;
}
// eslint-disable-next-line @typescript-eslint/class-name-casing
interface listAction {
  type: ListActions;
  payload?: any;
}

const initialState = {
  listData: [],
  getListStatus: requestStatus.loading,
};

const listByIdReducer = (state = initialState, action: listAction): ListState => {
  switch (action.type) {
    case FETCH_LIST_START:
      return { ...state, getListStatus: requestStatus.loading };
    case FETCH_LIST_SUCCESS:
      return { listData: action.payload, getListStatus: requestStatus.success };
    case FETCH_LIST_ERROR:
      return { ...state, getListStatus: requestStatus.error };
    default:
      return state;
  }
};

export default listByIdReducer;
