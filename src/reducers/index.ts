import { combineReducers } from 'redux';
import createTripReducer from './createTripReducer';
import userReducer from './userReducer';
import tripsReducer from './tripsReducer';
import listsReducer from './listsReducer';

const reducers = combineReducers({ user: userReducer, trips: tripsReducer, createTrip: createTripReducer, lists: listsReducer });

export default reducers;
