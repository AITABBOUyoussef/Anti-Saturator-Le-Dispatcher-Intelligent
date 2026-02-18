export const UI = {
    renderAddTaskForm: () => {
        const root = document.getElementById('root'); 
        if (!root) return; // Ila l-root makhdamch, mat-dir walou

        root.innerHTML = `
         <input type="text" id="title" placeholder="Entrer tasks name" />
    <p id="titleError" class="error-message"></p>
    <label for="urgency">Urgency (1-5):</label>
<input type="number" id="urgency" min="1" max="5" />

<label for="importance">Importance (1-5):</label>
<input type="number" id="importance" min="1" max="5" />

<label for="effort">Effort (1-5):</label>
<input type="number" id="effort" min="1" max="5" />

<button id="addTaskBtn">Add Task</button>
<p id="formError" class="error-message"></p>
        `;
    }
};