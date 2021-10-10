import { ADD_ITEM, TOGGLE_TODO, SET_FILTER } from "./actions";
import rootReducer from "./rootReducer";

export interface AddItemAction {
  type: typeof ADD_ITEM;
  nextId: number;
  value: string;
}

export interface ToggleAction {
  type: typeof TOGGLE_TODO;
  id: number;
}

export interface SetFilterAction {
  type: typeof SET_FILTER;
  value: string;
}

export interface TodoModel {
  id: number;
  text: string;
  completed: boolean;
}

export type TodoActionTypes = AddItemAction | ToggleAction | SetFilterAction;

export type RootState = ReturnType<typeof rootReducer>;
