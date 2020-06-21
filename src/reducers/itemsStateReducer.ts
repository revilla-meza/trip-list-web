import produce from 'immer';
import { requestStatus } from '../types/index';
import { FETCH_ONE_TRIP_SUCCESS } from '../actions/fetchOneTrip';
import { CREATE_TRIP_SUCCESS } from '../actions/createTrip';
import { SET_ITEM_STATE } from '../actions/setItemState';

export type ListActions = 'CREATE_TRIP_SUCCESS' | 'FETCH_ONE_TRIP_SUCCESS' | 'SET_ITEM_STATE';

export interface ListState {
  byId: any;
  getListStatus: requestStatus;
}

interface ListAction {
  type: ListActions;
  payload?: any;
}

const localStates = window.localStorage.getItem('itemsStateByListId');

const initialState = {
  byListId: localStates ? JSON.parse(localStates) : {},
};

const itemsStateReducer = produce((draft, action: ListAction) => {
  if (!draft) {
    return initialState;
  }
  switch (action.type) {
    case CREATE_TRIP_SUCCESS:
      draft.byListId[action.payload.listId] = {};
      break;
    case FETCH_ONE_TRIP_SUCCESS:
      if (!draft.byListId[action.payload.listId]) {
        draft.byListId[action.payload.listId] = {};
      }
      break;
    case SET_ITEM_STATE:
      if (!draft.byListId[action.payload.listId]) {
        draft.byListId[action.payload.listId] = {};
      }
      draft.byListId[action.payload.listId][action.payload.itemId] = action.payload.state;
      break;
  }
});

export default itemsStateReducer;
