import { combineReducers } from "redux";
import counterReducer from "./counter";
import userReducer from "./user";

const allReducer = combineReducers({
  counterReducer, 
  userReducer
})

export default allReducer
