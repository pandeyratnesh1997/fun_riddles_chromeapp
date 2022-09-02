import {
  legacy_createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";

import { reducer as adminReducer } from "./Admin/reducer";
import { reducer as authReducer } from "./AuthReducer/reducer.js";
import {reducer as playerReducer} from './Player/reducer';


import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
  key: "main-root",
  storage,
};

const rootReducer = combineReducers({
  authReducer,
  adminReducer,
  playerReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export const Persistor = persistStore(store);
