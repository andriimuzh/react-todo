import React, { Component } from "react";
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import { todoCreator } from "./utils/todoCreator.js";
import TodoList from "./components/TodoList/TodoList";
import { Switch, Route } from "react-router-dom";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskText: "",
      tasks: [],
    };
    this.addTask = this.addTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
    this.completeTask = this.completeTask.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  componentDidMount() {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    if (tasks) {
      this.setState({ tasks });
    }
  }
  handleInputChange({ target: { value } }) {
    this.setState({ taskText: value });
  }
  addTask(event) {
    const { taskText } = this.state;
    event.preventDefault();
    if (taskText.search(/[a-zA-ZÐ°-ÑÐ-Ñ]/) !== -1) {
      const newTodo = todoCreator(taskText.trim());
      this.setState((prevState) => ({
        taskText: "",
        tasks: [newTodo].concat(prevState.tasks),
      }));
    } else {
      return;
    }
  }
  completeTask(id) {
    const tasks = this.state.tasks.map((el) => {
      if (el.id === id) {
        el.completed = !el.completed;
      }
      return el;
    });
    this.setState({ tasks });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  removeTask(id) {
    const tasks = this.state.tasks.filter((el) => el.id !== id);
    this.setState({ tasks });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  render() {
    const { taskText, tasks } = this.state;
    return (
      <div className="app">
        <Header
          addTask={this.addTask}
          handleInputChange={this.handleInputChange}
          taskText={taskText}
        />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <TodoList
                tasks={tasks}
                removeTask={this.removeTask}
                completeTask={this.completeTask}
              />
            )}
          />
          <Route
            exact
            path="/new"
            render={() => (
              <TodoList
                tasks={tasks.filter((el) => !el.completed)}
                removeTask={this.removeTask}
                completeTask={this.completeTask}
              />
            )}
          />
          <Route
            path="/completed"
            render={() => (
              <TodoList
                tasks={tasks.filter((el) => el.completed)}
                removeTask={this.removeTask}
                completeTask={this.completeTask}
              />
            )}
          />
        </Switch>
        <Nav />
      </div>
    );
  }
}
