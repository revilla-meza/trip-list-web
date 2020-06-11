import { requestStatus } from '../types/index';
import { FETCH_LIST_SUCCESS, FETCH_LIST_START, FETCH_LIST_ERROR } from '../actions/fetchList';
import { FETCH_ONE_TRIP_SUCCESS } from '../actions/fetchOneTrip';
import { CREATE_TRIP_SUCCESS } from '../actions/createTrip';
import { CREATE_ITEM_SUCCESS } from '../actions/createItem';

export type ListActions =
  | 'FETCH_LIST_SUCCESS'
  | 'FETCH_LIST_START'
  | 'FETCH_LIST_ERROR'
  | 'CREATE_TRIP_SUCCESS'
  | 'FETCH_ONE_TRIP_ERROR'
  | 'FETCH_ONE_TRIP_ERROR'
  | 'FETCH_ONE_TRIP_START'
  | 'FETCH_ONE_TRIP_SUCCESS'
  | 'CREATE_ITEM_SUCCESS';

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

const listByIdReducer = (state: ListState = initialState, action: ListAction): ListState => {
  switch (action.type) {
    case FETCH_LIST_START:
      return { ...state, getListStatus: requestStatus.loading };
    case FETCH_LIST_SUCCESS:
      const itemIds = action.payload.items.map((it: { id: any }) => it.id);
      return {
        byId: { ...state.byId, [action.payload.id]: { ...action.payload, itemIds, itemStates: itemIds.reduce((out:any, it:any)=>{ 
          out[it] = false; 
          return out;
        }, {}) } },
        getListStatus: requestStatus.success,
      };
    case FETCH_LIST_ERROR:
      return { ...state, getListStatus: requestStatus.error };
    case CREATE_TRIP_SUCCESS:
      const listForTrip = { ...action.payload.list, itemIds: [], itemStates: {} };
      return {
        byId: { ...state.byId, [action.payload.listId]: listForTrip },
        getListStatus: requestStatus.success,
      };
    case FETCH_ONE_TRIP_SUCCESS:
      const list = {
        ...action.payload.list,
        itemIds: action.payload.list.items.map((it: { id: any }) => it.id),
        itemStates: action.payload.list.items.reduce((out:any, it:any)=>{ 
          out[it.id] = false; 
          return out;
        }, {}),  
      };
      return {
        byId: { ...state.byId, [action.payload.listId]: list },
        getListStatus: requestStatus.success,
      };
    case CREATE_ITEM_SUCCESS:
      const newItems = state.byId[action.payload.listId].itemIds.concat(action.payload.id);
      return {
        byId: { ...state.byId, [action.payload.listId]: { ...state.byId[action.payload.listId], itemIds: newItems } },
        getListStatus: requestStatus.success,
      };
    case 'SET_ITEM_STATE':
      return {
        byId: {
          ...state.byId,
          [action.payload.listId]: {
            ...state.byId[action.payload.listId],
            itemStates: {
              ...state.byId[action.payload.listId.itemStates],
              [action.payload.itemId]: action.payload.state
            }
          }
        }
      }
    default:
      return state;
  }
};

export default listByIdReducer;
