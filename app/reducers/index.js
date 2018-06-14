import { combineReducers } from 'redux';
import operationsReducer from './operationsReducer';
import themesReducer from './themesReducer';

export default combineReducers({ operationsReducer, themesReducer });
