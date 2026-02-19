import { UI } from './modules/ui.js';

import { getTasks, saveTasks } from "./modules/storage.js";
import { validateTitle, validateScore } from "./modules/validator.js";
import { addtaskkk } from './modules/todo.js';
// 1. Qbed l-bouton mn l-Sidebar
const addTaskBtn = document.querySelector('.btn--secondary');

// 2. Event Listener: Mnin l-user i-cliki, t-ban l-form
addTaskBtn.addEventListener('click', () => {
    UI.renderAddTaskForm();
    let tasks = getTasks();
  console.log("Tasks:", tasks);

  
  const titleInput = document.getElementById("title");
  const urgencyInput = document.getElementById("urgency");
  const importanceInput = document.getElementById("importance");
  const effortInput = document.getElementById("effort");
  const addBtn = document.getElementById("addTaskBtn");
  const formError = document.getElementById("formError");

  
  addBtn.addEventListener("click", () => {
   console.log("rgefzdas");
    addtaskkk(titleInput,urgencyInput,importanceInput,effortInput,formError,tasks)
  })
});



document.addEventListener("DOMContentLoaded", () => {

  
});