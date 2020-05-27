import { CREATE_TRIP_SUCCESS } from '../actions/createTrip';
export type ListsActions = 'CREATE_TRIP_SUCCESS';
export interface ListsState {
  ids: any;
  data: {
    listId: any;
  };
}
// eslint-disable-next-line @typescript-eslint/class-name-casing
interface listsAction {
  type: ListsActions;
  payload?: any;
}

const initialState = {
  ids: [],
  data: {
    listId: {},
  },
};

const listsReducer = (state = initialState, action: listsAction): ListsState => {
  switch (action.type) {
    case CREATE_TRIP_SUCCESS:
      return {
        ids: [...state.ids, action.payload.listId],
        data: { ...state.data, [action.payload.listId]: action.payload.list },
      };
    default:
      return state;
  }
};

export default listsReducer;
