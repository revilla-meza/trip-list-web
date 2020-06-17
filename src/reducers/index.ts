import { combineReducers } from 'redux';
import createTripReducer from './createTripReducer';
import userReducer from './userReducer';
import tripsReducer from './tripsReducer';
import listReducer from './listReducer';
import itemsByIdReducer from './itemsByIdReducer';
import itemsStateReducer from './itemStateReducer';

const reducers = combineReducers({
  user: userReducer,
  trips: tripsReducer,
  createTrip: createTripReducer,
  lists: listReducer,
  items: itemsByIdReducer,
  itemsState: itemsStateReducer
});

export default reducers;
