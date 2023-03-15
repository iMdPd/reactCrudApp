import { combineReducers, createStore } from "redux";
import { initialState } from "./initialState";

const subreducers = {};

const reducer = combineReducers(subreducers);

export const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
