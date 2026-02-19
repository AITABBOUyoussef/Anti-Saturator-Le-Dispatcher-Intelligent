
export const UI = {
    renderAddTaskForm: () => {
        const root = document.getElementById('root'); 
        if (!root) return;

       
        root.innerHTML = `
            <div class="task-card">
                <h2 class="task-card__title">Create New Task</h2>
                <p class="task-card__subtitle">Define your priority and energy levels</p>
                
                <div class="task-card__form">
                    <div class="input-group">
                        <label for="title">TASK TITLE</label>
                        <input type="text" id="title" placeholder="What are you working on?" />
                        <p id="titleError" class="error-message"></p>
                    </div>

                    <div class="metrics-grid">
                        <div class="input-group">
                            <label for="urgency">URGENCY (1-5)</label>
                            <input type="number" id="urgency" min="1" max="5" placeholder="Score" />
                        </div>
                        <div class="input-group">
                            <label for="importance">IMPORTANCE (1-5)</label>
                            <input type="number" id="importance" min="1" max="5" placeholder="Score" />
                        </div>
                        <div class="input-group">
                            <label for="effort">EFFORT (1-5)</label>
                            <input type="number" id="effort" min="1" max="5" placeholder="Score" />
                        </div>
                    </div>

                    <button id="addTaskBtn" class="btn btn--submit">Add Task To Dashboard</button>
                    <p id="formError" class="error-message"></p>
                </div>
            </div>
        `;
        
    }
    
};

export const quiz= {
    afficherquiz:()=>{
const root = document.getElementById('root'); 
        if (!root) return;
        root.innerHTML = `<div  id="q1">
        <h1>How was your day?</h1>
        <button id="good">good</button>
        <button id="notgood">Not so bad!</button>
        <button id="bad">Bad</button>
    </div>
    <div  id="q2" style="display:none;">
        <h1>How are you feeling right now?</h1>
        <button id="happy">Happy</button>
        <button id="ok">Okey</button>
        <button id="sad">Sad</button>
    </div>
    <div   id="q3" style="display:none;">
        <h1>How motivated do you feel today?</h1>
        <button id="very">Very motivated</button>
        <button id="normal">Normal</button>
        <button id="no">No motivation</button>
    </div>`;
    }
};