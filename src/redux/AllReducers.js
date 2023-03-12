import { combineReducers } from "redux";
import productsReducer from "./prodcuts/reducer";
import authReducer from "./auth/reducer";

const AllReducers = combineReducers({
  productsReducer,
  authReducer,
});

export default AllReducers;
