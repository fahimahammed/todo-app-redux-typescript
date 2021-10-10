import React from "react";
import { ToDoItem } from "./ToDoItem";
import {
  FILTER_ALL,
  FILTER_ACTIVE,
  FILTER_COMPLETE,
  toggleTodo,
} from "../redux/actions";
import { connect } from "react-redux";
import { TodoModel, RootState } from "../redux/types";
const mapStateToProps = (state: RootState) => {
  return {
    todoItems: getVisibleTodos(state.todoItems, state.visibilityFilter),
  };
};

const mapDispatchToProps = {
  toggleTodo,
};

const getVisibleTodos = (todos: TodoModel[], filter: string): TodoModel[] => {
  switch (filter) {
    case FILTER_ALL: {
      return todos;
    }
    case FILTER_ACTIVE: {
      return todos.filter((c: TodoModel) => !c.completed);
    }
    case FILTER_COMPLETE: {
      return todos.filter((c: TodoModel) => c.completed);
    }
    default:
      return todos;
  }
};

const ToDoList = ({
  todoItems,
  toggleTodo,
}: {
  todoItems: TodoModel[];
  toggleTodo: (id: number) => void;
}) => {
  return (
    <>
      {todoItems.map((c: TodoModel) => (
        <ToDoItem
          onToggleClick={toggleTodo}
          key={c.id}
          id={c.id}
          complete={c.completed}
          text={c.text}
        ></ToDoItem>
      ))}
    </>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
