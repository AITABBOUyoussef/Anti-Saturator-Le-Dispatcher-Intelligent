
export const UI = {
    renderAddTaskForm: () => {
        const root = document.getElementById('root'); 
        if (!root) return;

       
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