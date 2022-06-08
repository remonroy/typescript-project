import { combineReducers } from "redux";
import findUserReducer from "./findUser";

const reducer = combineReducers({
  findUser: findUserReducer,
});
export default reducer;
