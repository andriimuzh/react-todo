import React from "react";
import "./todoItem.scss";
import T from "prop-types";

export default function TodoItem({
  id,
  completed,
  task,
  removeTask,
  completeTask,
}) {
  return (
    <li className="todo-item">
      <p
        className={
          completed ? "todo-item__text todo-item__text_done" : "todo-item__text"
        }
        onClick={() => completeTask(id)}
      >
        {task}
      </p>
      <button className="todo-item__close-btn" onClick={() => removeTask(id)}>
        &#9747;
      </button>
    </li>
  );
}

TodoItem.propTypes = {
  id: T.string.isRequired,
  completed: T.bool.isRequired,
  task: T.string.isRequired,
  removeTask: T.func.isRequired,
  completeTask: T.func.isRequired,
};
