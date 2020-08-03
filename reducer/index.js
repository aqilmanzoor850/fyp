import { combineReducers } from 'redux';
import auth from './auth_reducer';
import database from './DatabaseReducer';

export default combineReducers({
    auth: auth,
    database: database
});