import { combineReducers } from 'redux';

import userReducer from './userReducer';
import tripsReducer from './tripReducer';

const reducers = combineReducers({ user: userReducer, trips: tripsReducer });

export default reducers;
