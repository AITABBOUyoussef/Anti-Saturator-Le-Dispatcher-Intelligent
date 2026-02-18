import { UI } from './modules/ui.js';

// 1. Qbed l-bouton mn l-Sidebar
const addTaskBtn = document.querySelector('.btn--secondary');

// 2. Event Listener: Mnin l-user i-cliki, t-ban l-form
addTaskBtn.addEventListener('click', () => {
    UI.renderAddTaskForm();
});