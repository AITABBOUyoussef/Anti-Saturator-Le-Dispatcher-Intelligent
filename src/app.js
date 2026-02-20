// src/app.js
import { UI } from "./modules/ui.js"; // ISLAH: 7iyedna renderTopTask mn hna hit dakhle UI
import { quizzz } from './modules/quiz.js';
import { getTasks, getEnergy } from "./modules/storage.js";
import { addtaskkk } from './modules/todo.js';
import { getTopTask } from "./modules/sorter.js"; // DAROURI bach n-rttbou l-tasks

const addTaskBtn = document.querySelector('.btn--secondary');
const startQuizBtn = document.getElementById('start-quiz');
const TaskBtn = document.getElementById('open-task');

// Event: Start Quiz
if (startQuizBtn) {
    startQuizBtn.addEventListener('click', quizzz);
}

// Event: Show Sorter Result (Top Task)
if (TaskBtn) {
    TaskBtn.addEventListener("click", () => {
        const tasks = getTasks();
        const energy = getEnergy() || 5; // Default 5 ila madarch quiz
        const topTask = getTopTask(tasks, energy);
        UI.renderTopTask(topTask); // ISLAH: N-3tiwh l-task li rttibna
    });
}

// Event: Render Form & Handle Adding
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