
import { getTasks, saveTasks } from "./storage.js";
import { validateTitle, validateScore } from "./validator.js";
export function addtaskkk(titleInput,urgencyInput,importanceInput,effortInput,formError,tasks){

 formError.textContent = "";

   
    const title = titleInput.value.trim();
    const urgency = Number(urgencyInput.value);
    const importance = Number(importanceInput.value);
    const effort = Number(effortInput.value);
console.log(title);
   
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
console.log(newTask);
    tasks.push(newTask);
    saveTasks(tasks);

    console.log("Nouvelle tâche ajoutée :", newTask);
    console.log("Toutes les tâches :", tasks);

    titleInput.value = "";
    urgencyInput.value = "";
    importanceInput.value = "";
    effortInput.value = "";




  };
        

