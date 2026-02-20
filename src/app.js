
import { UI } from './modules/ui.js';
import { quizzz } from './modules/quiz.js';
import { getTasks } from "./modules/storage.js";
import { addtaskkk } from './modules/todo.js'; 


const addTaskBtn = document.querySelector('.btn--secondary');
const startQuizBtn = document.getElementById('start-quiz');


if (startQuizBtn) {
    startQuizBtn.addEventListener('click', quizzz);
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