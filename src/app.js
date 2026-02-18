import { getTasks } from "./modules/storage.js";

document.addEventListener("DOMContentLoaded", () => {
  const tasks = getTasks();
  console.log("Tasks:", tasks);
  console.log("Is Array?", Array.isArray(tasks));
});
