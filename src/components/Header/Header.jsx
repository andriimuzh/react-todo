import React from "react";
import "./header.scss";
import T from "prop-types";
export default function Header({ addTask, handleInputChange, taskText }) {
  return (
    <header className="header">
      <h1 className="header__title">To do App</h1>
      <form className="header__form" onSubmit={addTask}>
        <input
          className="header__input"
          onChange={handleInputChange}
          placeholder="Add task"
          type="text"
          value={taskText}
        />
        <button className="header__btn" type="submit">
          &#43; Add
        </button>
      </form>
    </header>
  );
}

Header.propTypes = {
  addTask: T.func,
  handleInputChange: T.func,
  taskText: T.string,
};
