import { getTasks, saveTasks } from "./modules/storage.js";
import { validateTitle, validateScore } from "./modules/validator.js";
import { saveEnergy, getEnergy } from "./modules/storage.js";

document.addEventListener("DOMContentLoaded", () => {

  let tasks = getTasks();
  console.log("Tasks:", tasks);

  
  const titleInput = document.getElementById("title");
  const urgencyInput = document.getElementById("urgency");
  const importanceInput = document.getElementById("importance");
  const effortInput = document.getElementById("effort");
  const addBtn = document.getElementById("addTaskBtn");
  const formError = document.getElementById("formError");

  
  addBtn.addEventListener("click", () => {
    formError.textContent = "";

   
    const title = titleInput.value.trim();
    const urgency = Number(urgencyInput.value);
    const importance = Number(importanceInput.value);
    const effort = Number(effortInput.value);

   
    if (!validateTitle(title)) {
      formError.textContent = "Titre invalide : 5-50 caractères, pas de caractères spéciaux.";
      return;
    }

    if (![urgency, importance, effort].every(validateScore)) {
      formError.textContent = "Urgence, Importance et Effort doivent être des nombres entre 1 et 5.";
      return;
    }

    const newTask = {
      id: tasks.length + 1,
      title,
      urgency,
      importance,
      effort
    };

    tasks.push(newTask);
    saveTasks(tasks);

    console.log("Nouvelle tâche ajoutée :", newTask);
    console.log("Toutes les tâches :", tasks);

    titleInput.value = "";
    urgencyInput.value = "";
    importanceInput.value = "";
    effortInput.value = "";
  });
});


saveEnergy(7);

console.log("Energy:", getEnergy());
