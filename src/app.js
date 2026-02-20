
import { UI } from "./modules/ui.js"; 
import { quizzz } from './modules/quiz.js';
import { getTasks, getEnergy } from "./modules/storage.js";
import { addtaskkk } from './modules/todo.js';
import { getTopTask } from "./modules/sorter.js"; 

const addTaskBtn = document.querySelector('.btn--secondary');
const startQuizBtn = document.getElementById('start-quiz');
const TaskBtn = document.getElementById('open-task');


if (startQuizBtn) {
    startQuizBtn.addEventListener('click', quizzz);
}


if (TaskBtn) {
    TaskBtn.addEventListener("click", () => {
        const tasks = getTasks();
        const energy = getEnergy() || 5; 
        const topTask = getTopTask(tasks, energy);
        UI.renderTopTask(topTask);
    });
}

if (addTaskBtn) {
    addTaskBtn.addEventListener('click', () => {
        UI.renderAddTaskForm();
        
        const addBtn = document.getElementById("addTaskBtn");
        if (addBtn) {
            addBtn.onclick = () => {
                const titleInput = document.getElementById("title");
                const urgencyInput = document.getElementById("urgency");
                const importanceInput = document.getElementById("importance");
                const effortInput = document.getElementById("effort");
                const formError = document.getElementById("formError");
                let tasks = getTasks();
                addtaskkk(titleInput, urgencyInput, importanceInput, effortInput, formError, tasks);
            };
        }
    });
}