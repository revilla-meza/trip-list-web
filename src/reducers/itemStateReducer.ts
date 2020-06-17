import produce from 'immer';
import { requestStatus } from '../types/index';
import { FETCH_LIST_SUCCESS, FETCH_LIST_START, FETCH_LIST_ERROR } from '../actions/fetchList';
import { FETCH_ONE_TRIP_SUCCESS } from '../actions/fetchOneTrip';
import { CREATE_TRIP_SUCCESS } from '../actions/createTrip';
import { CREATE_ITEM_SUCCESS } from '../actions/createItem';
import { SET_ITEM_STATE } from '../actions/setItemState';

export type ListActions =
  | 'FETCH_LIST_SUCCESS'
  | 'FETCH_LIST_START'
  | 'FETCH_LIST_ERROR'
  | 'CREATE_TRIP_SUCCESS'
  | 'FETCH_ONE_TRIP_ERROR'
  | 'FETCH_ONE_TRIP_ERROR'
  | 'FETCH_ONE_TRIP_START'
  | 'FETCH_ONE_TRIP_SUCCESS'
  | 'CREATE_ITEM_SUCCESS'
  | 'SET_ITEM_STATE';

export interface ListState {
  byId: any;
  getListStatus: requestStatus;
}

interface ListAction {
  type: ListActions;
  payload?: any;
}

const initialState = {
  byListId: window.localStorage.getItem('itemStatesByListId') || {},
};

const listReducer = produce((draft, action: ListAction) => {
  if (!draft) {
    return initialState;
  }
  switch (action.type) {
    case CREATE_TRIP_SUCCESS:
      draft.byListId[action.payload.listId] = {};
      break;
    case FETCH_ONE_TRIP_SUCCESS:
      if (!draft.byListId[action.payload.listId]){
        draft.byListId[action.payload.listId] = {}
      };
      break;
    case SET_ITEM_STATE:
      draft.byListId[action.payload.listId][action.payload.itemId] = action.payload.state;
      break;
  }
});

export default listReducer;
