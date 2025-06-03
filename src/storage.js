import Project from './project.js'
import Todo from './todo.js'

export function setLocalStorage() {
  const addProjectBtn = document.getElementById("add-project-btn");
  const addTodoBtn = document.getElementById("add-todo-btn");

  addProjectBtn.addEventListener("click", () => {
    const projectNameInput = document.getElementById("project-name");
    const projectName = projectNameInput.value;

    let projects = JSON.parse(localStorage.getItem("projects")) || [];

    projects.push(projectName); 
    localStorage.setItem("projects", JSON.stringify(projects));
  });

  addTodoBtn.addEventListener("click",()=>{
    const todoNameInput = document.getElementById("todo-title")
    const todoName = todoNameInput.value;

    let todos = JSON.parse(localStorage.getItem("todos")) || []
    todos.push(todoName)

    localStorage.setItem("todos", JSON.stringify(todos))
  })
}
