import { combineReducers } from 'redux';

import userReducer from './userReducer';
import tripReducer from './tripReducer';

const reducers = combineReducers({ user: userReducer, trip: tripReducer });

export default reducers;
