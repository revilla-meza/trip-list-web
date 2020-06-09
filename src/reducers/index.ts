import { combineReducers } from 'redux';
import createTripReducer from './createTripReducer';
import userReducer from './userReducer';
import tripsReducer from './tripsReducer';
import listByIdReducer from './listByIdReducer';
import itemsByIdReducer from './itemsByIdReducer';

const reducers = combineReducers({
  user: userReducer,
  trips: tripsReducer,
  createTrip: createTripReducer,
  lists: listByIdReducer,
  items: itemsByIdReducer,
});

export default reducers;
