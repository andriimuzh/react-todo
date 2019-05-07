import React from "react";
import "./todoList.scss";
import T from "prop-types";
import TodoItem from "../TodoItem/TodoItem";

export default function TodoList({ tasks, removeTask, completeTask }) {
  const listItems = tasks.map((item) => (
    <TodoItem
      key={item.id}
      {...item}
      removeTask={removeTask}
      completeTask={completeTask}
    />
  ));
  return <ul className="todo-list">{listItems}</ul>;
}
TodoList.propTypes = {
  tasks: T.array.isRequired,
  removeTask: T.func.isRequired,
  completeTask: T.func.isRequired,
};
