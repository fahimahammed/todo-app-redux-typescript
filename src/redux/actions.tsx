import { TodoActionTypes } from "./types";

export const ADD_ITEM = "ADD_ITEM";
export const TOGGLE_TODO = "MARK_COMPLETE";
export const FILTER_ALL = "FILTER_ALL";
export const FILTER_ACTIVE = "FILTER_ACTIVE";
export const FILTER_COMPLETE = "FILTER_COMPLETE";
export const SET_FILTER = "SET_FILTER";


let nextId: number = 0;
//s

export const addItem = (value: string): TodoActionTypes => ({
  type: ADD_ITEM,
  nextId: nextId++,
  value,
});

export const toggleTodo = (id: number): TodoActionTypes => ({
  type: TOGGLE_TODO,
  id,
});

export const setFilter = (filter: string): TodoActionTypes => ({
  type: SET_FILTER,
  value: filter,
});
