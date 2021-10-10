import { FILTER_ALL, SET_FILTER } from "./actions";
import { TodoActionTypes } from "./types";

const visibilityFilter = (
  state: string = FILTER_ALL,
  action: TodoActionTypes
): string => {
  switch (action.type) {
    case SET_FILTER: {
      return action.value;
    }
  }
  return state;
};
export default visibilityFilter;
