export function quizzz (){
document.getElementById("good").onclick = () => nextQuestion(8, "q2");
document.getElementById("notgood").onclick = () => nextQuestion(5, "q2");
document.getElementById("bad").onclick = () => nextQuestion(2, "q2");

document.getElementById("happy").onclick = () => nextQuestion(9, "q3");
document.getElementById("ok").onclick = () => nextQuestion(5, "q3");
document.getElementById("sad").onclick = () => nextQuestion(2, "q3");

document.getElementById("very").onclick = () => finishQuiz(9);
document.getElementById("normal").onclick = () => finishQuiz(5);
document.getElementById("no").onclick = () => finishQuiz(1);

let totalScore = 0;



 function nextQuestion(value, nextId) {
    totalScore += value;
    document.getElementById(nextId).style.display = "block";
}

 function finishQuiz(value) {
    totalScore += value;
    const energy = Math.round(totalScore / 3);
    alert("Your energy level is: " + energy);
}
}

