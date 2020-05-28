import { combineReducers } from 'redux';
import createTripReducer from './createTripReducer';
import userReducer from './userReducer';
import tripsReducer from './tripsReducer';
import listByIdReducer from './listByIdReducer';

const reducers = combineReducers({
  user: userReducer,
  trips: tripsReducer,
  createTrip: createTripReducer,
  list: listByIdReducer,
});

export default reducers;
