import { createStore, applyMiddleware } from "redux";
import AllReducers from "./AllReducers";
import thunk from "redux-thunk";


const store = createStore(
  AllReducers,
  {},
  applyMiddleware(thunk)
);

export default store;
