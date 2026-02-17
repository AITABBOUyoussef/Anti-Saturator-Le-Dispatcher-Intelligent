let tasks = [
  { id: 1, title: "Sport", urgency: 4, importance: 5, effort: 3 },
  { id: 2, title: "Lire", urgency: 2, importance: 4, effort: 2 },
  { id: 3, title: "Projet JS", urgency: 5, importance: 5, effort: 5 },
];
let enirgie=5

let maxImportance = Math.max(...tasks.map((task) => task.importance));
let maxImportance1 = tasks.filter((task) => task.importance === maxImportance);
console.log(maxImportance1);


let maxurgency = Math.max(...tasks.map((tasks) => tasks.urgency))
let maxurgency1 = tasks.filter((task) => task.urgency === maxurgency)
console.log(maxurgency1)
