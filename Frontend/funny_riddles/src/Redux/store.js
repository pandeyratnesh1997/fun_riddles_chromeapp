// store
import {legacy_createStore, combineReducers, compose,applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import {reducer as adminReducer} from './Admin/reducer';

const rootReducer = combineReducers({adminReducer})


const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default store