// Niveau d'énergie (jaya men quiz)
let energyLevel = 3; // bdelha 1 → 10

// Tableau dyal tâches
let tasks = [
  { id: 1, title: "Sport", urgency: 4, importance: 5, effort: 3 },
  { id: 2, title: "Lire", urgency: 2, importance: 4, effort: 2 },
  { id: 3, title: "Projet JS", urgency: 5, importance: 5, effort: 5 },
];

function getTopPriorityTask(tasks, energyLevel, skippedId = null) {
  // 1️⃣ Ila kayn skip
  if (skippedId !== null) {
    tasks = tasks.filter((task) => task.id !== skippedId);
  }

  if (tasks.length === 0) {
    console.log("Aucune tâche disponible");
    return;
  }

  // 2️⃣ Calcul score
  tasks.forEach((task) => {
    if (energyLevel <= 4) {
      // Basse énergie
      task.score = task.importance * 2 + task.urgency - task.effort * 2;
    } else {
      // Energie normale
      task.score = task.importance * 3 + task.urgency * 2 - task.effort;
    }
  });

  // 3️⃣ Tri
  tasks.sort((a, b) => b.score - a.score);

  // 4️⃣ Afficher top tâche
  console.log("Tâche prioritaire :", tasks[0]);

  return tasks[0];
}

// 🔥 Test normal
let topTask = getTopPriorityTask(tasks, energyLevel);

// 🔥 Test skip
console.log("---- Après PASSER ----");
getTopPriorityTask(tasks, energyLevel, topTask.id);
