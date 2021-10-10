import { ADD_ITEM, TOGGLE_TODO } from "./actions";
import { TodoActionTypes, TodoModel } from "./types";

const initialState: TodoModel[] = [];

const todoItems = (
  state: TodoModel[] = initialState,
  action: TodoActionTypes
): TodoModel[] => {

  switch (action.type) {
    case ADD_ITEM:
      return [
        ...state,
        { id: action.nextId, text: action.value, completed: false },
      ];

    case TOGGLE_TODO:
      return state.map((todo: TodoModel) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
  }

  return state;
};

export default todoItems;
