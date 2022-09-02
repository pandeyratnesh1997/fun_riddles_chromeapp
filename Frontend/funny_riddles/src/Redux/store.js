import {
  legacy_createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { reducer as adminReducer } from "./Admin/reducer";
import { reducer as authReducer } from "./AuthReducer/reducer.js";

const rootReducer = combineReducers({ authReducer, adminReducer });
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
