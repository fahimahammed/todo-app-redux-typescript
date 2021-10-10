import { combineReducers } from "redux";
import todoItems from "./reducer";
import visibilityFilter from "./filterReducer";

export default combineReducers({
  todoItems,
  visibilityFilter,
});
