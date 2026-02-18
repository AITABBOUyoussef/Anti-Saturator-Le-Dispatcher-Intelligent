export const UI = {
    renderAddTaskForm: () => {
        const root = document.getElementById('root'); 
        if (!root) return; // Ila l-root makhdamch, mat-dir walou

        root.innerHTML = `
            <div class="task-form-container">
                <h2>Create New Task</h2>
                <div class="input-group">
                    <label>TASK TITLE</label>
                    <input type="text" id="task-name" placeholder="Enter task name...">
                </div>
                <button class="btn btn--teal" id="submit-task">Add Task ></button>
            </div>
        `;
    }
};