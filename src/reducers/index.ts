import { combineReducers } from 'redux';
import createTripReducer from './createTripReducer'
import userReducer from './userReducer';
import tripsReducer from './tripsReducer';

const reducers = combineReducers({ user: userReducer, trips: tripsReducer, createTrip: createTripReducer });

export default reducers;
