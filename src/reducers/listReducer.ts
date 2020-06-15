import produce from "immer";
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
  byId: {},
  getListStatus: requestStatus.ready,
};

const listReducer = produce((draft, action:ListAction) => {
  if (!draft) {
    return initialState;
  }
  switch (action.type) {
    case FETCH_LIST_START:
      draft.getListStatus = requestStatus.loading;
      break;
    case FETCH_LIST_SUCCESS:
      const itemIds = action.payload.items.map((it: { id: any }) => it.id);

      draft.byId[action.payload.id] = {
        ...action.payload,
        itemIds,
        itemStates: itemIds.reduce((out: any, it: any) => {
          out[it] = false;
          return out;
        }, {}),
      };
      draft.getListStatus = requestStatus.success;
      break;
    case FETCH_LIST_ERROR:
      draft.getListStatus = requestStatus.error;
      break;
    case CREATE_TRIP_SUCCESS:
      const listForTrip = { ...action.payload.list, itemIds: [], itemStates: {} };
      draft.getListStatus = requestStatus.success;
      draft.byId[action.payload.listId] = listForTrip;
      break;
    case FETCH_ONE_TRIP_SUCCESS:
      const list = {
        ...action.payload.list,
        itemIds: action.payload.list.items.map((it: { id: any }) => it.id),
        itemStates: action.payload.list.items.reduce((out: any, it: any) => {
          out[it.id] = false;
          return out;
        }, {}),
      };
      draft.byId[action.payload.listId] = list;
      draft.getListStatus = requestStatus.success;
      break;
    case CREATE_ITEM_SUCCESS:
      draft.byId[action.payload.listId].itemIds.push(action.payload.id); 
      break;
    case SET_ITEM_STATE:
      draft.byId[action.payload.listId].itemStates[action.payload.itemId] = action.payload.state;
      break;
  }
});

export default listReducer;
