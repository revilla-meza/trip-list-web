import { combineReducers } from 'redux';

import userReducer from './userReducer';
import tripsReducer from './tripsReducer';

const reducers = combineReducers({ user: userReducer, trips: tripsReducer });

export default reducers;
