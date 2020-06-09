import { requestStatus } from '../types/index';
import { FETCH_LIST_SUCCESS } from '../actions/fetchList';
import { CREATE_ITEM_SUCCESS, CREATE_ITEM_START, CREATE_ITEM_ERROR } from '../actions/createItem';

export type ItemActions = 'FETCH_LIST_SUCCESS' | 'CREATE_ITEM_START' | 'CREATE_ITEM_ERROR' | 'CREATE_ITEM_SUCCESS';

export interface ItemState {
  byId: any;
  getItemStatus: requestStatus;
}

interface ItemAction {
  type: ItemActions;
  payload?: any;
}

const initialState = {
  byId: {},
  getItemStatus: requestStatus.ready,
};

const itemsByIdReducer = (state = initialState, action: ItemAction): ItemState => {
  switch (action.type) {
    case FETCH_LIST_SUCCESS:
      const newItems = action.payload.items.reduce((output: any, el: any) => {
        output[el.id] = el;
        return output;
      }, {});
      return { byId: { ...state.byId, ...newItems }, getItemStatus: requestStatus.success };
    case CREATE_ITEM_START:
      return { ...state, getItemStatus: requestStatus.loading };
    case CREATE_ITEM_SUCCESS:
      return {
        byId: { ...state.byId, [action.payload.id]: action.payload },
        getItemStatus: requestStatus.success,
      };
    case CREATE_ITEM_ERROR:
      return { ...state, getItemStatus: requestStatus.error };
    default:
      return state;
  }
};

export default itemsByIdReducer;
