import uuidv4 from "uuid";

export function todoCreator(value) {
  let taskText;
  if (value.search(/[a-zA-ZÐ°-ÑÐ-Ñ]/) === 0) {
    taskText = value[0].toUpperCase() + value.slice(1);
  } else {
    taskText = value;
  }
  const newTodo = {
    id: uuidv4(),
    task: taskText,
    completed: false,
  };
  addTaskToLocalStorage(newTodo);
  return newTodo;
}

function addTaskToLocalStorage(task) {
  if (localStorage.getItem("tasks") === null) {
    let tasks = [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  } else {
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
}
