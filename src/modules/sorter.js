import { Value } from "sass";
import { mockTasks } from "../data/mockTasks.js"; 
import { showNextStep } from "./quiz.js";

let energy = showNextStep(Value);

export function filterByEnergy(tasks, energy) {
  const easyTasks = tasks.filter((task) => task.effort <= 3);
  const mediumTasks = tasks.filter((task) => task.effort > 3 && task.effort <= 6);
  const hardTasks = tasks.filter((task) => task.effort > 6);

  if (energy <= 3) {
    return easyTasks;
  } else if (energy > 3 && energy <= 6) {
   return mediumTasks;
  } else {
    return hardTasks;
  }
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 

export function calculateScore(task) {
  return task.urgency * 3 + task.importance - task.effort;
}


export function getTopTask(tasks, energy) {
  const filteredTasks = filterByEnergy(tasks, energy);



  const scoredTasks = filteredTasks.map((task) => ({
    ...task,
    score: calculateScore(task),
  }));

  scoredTasks.sort((a, b) => b.score - a.score);

  return scoredTasks[0];
}


const topTask = getTopTask(mockTasks, energy);
console.log(topTask);
console.log(energy)