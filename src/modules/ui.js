
export const UI = {
  renderAddTaskForm: () => {
    const root = document.getElementById("root");
    if (!root) return;
    root.innerHTML = `
            <div class="task-card animate-in">
                <h2 class="task-card__title">Create New Task</h2>
                <div class="task-card__form">
                    <div class="input-group">
                        <label for="title">TASK TITLE</label>
                        <input type="text" id="title" placeholder="What are you working on?" />
                    </div>
                    <div class="metrics-grid">
                        <div class="input-group"><label>URGENCY</label><input type="number" id="urgency" min="1" max="5"></div>
                        <div class="input-group"><label>IMPORTANCE</label><input type="number" id="importance" min="1" max="5"></div>
                        <div class="input-group"><label>EFFORT</label><input type="number" id="effort" min="1" max="5"></div>
                    </div>
                    <button id="addTaskBtn" class="btn btn--submit">Add Task To Dashboard</button>
                    <p id="formError" class="error-message"></p>
                </div>
            </div>`;
  },

  renderQuestion: (index, data, total, onAnswer) => {
    const root = document.getElementById("root");
    root.innerHTML = `
            <div class="quiz-card animate-in">
                <div class="quiz-header"><span>Question ${index + 1}/${total}</span></div>
                <h2 class="quiz-question">${data.question}</h2>
                <div class="options-container">
                    ${data.options.map((opt, i) => `<button class="option-btn" data-index="${i}">${opt.text}</button>`).join("")}
                </div>
            </div>`;

    const buttons = document.querySelectorAll(".option-btn");
    buttons.forEach((btn) => {
      btn.onclick = () => onAnswer(data.options[btn.dataset.index].value);
    });
  },

  renderResult: (energy) => {
    const root = document.getElementById("root");
    root.innerHTML = `
            <div class="quiz-card result-card animate-in">
                <h2>Your Energy Level: <span class="energy-circle">${energy}</span></h2>
                <button class="btn btn--primary" onclick="location.reload()">Back</button>
            </div>`;
  },

  renderTopTask: (mockTasks) => {
    const root = document.getElementById("root");
    if (!mockTasks) {
      root.innerHTML = `<div class="task-card animate-in">
                <h2>No tasks available</h2>
            </div>`;
      return;
    }
    root.innerHTML = `
            <div class="task-card animate-in">
                <h2>Top Task For You</h2>
                <p><strong>Title:</strong> ${mockTasks.title}</p>
                <p><strong>Urgency:</strong> ${mockTasks.urgency}</p>
                <p><strong>Importance:</strong> ${mockTasks.importance}</p>
                <p><strong>Effort:</strong> ${mockTasks.effort}</p>
            </div>`;
  },
};