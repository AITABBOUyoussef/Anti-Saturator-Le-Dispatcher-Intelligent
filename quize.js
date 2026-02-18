const Good = document.getElementById("good");
const notgood = document.getElementById("notgood");
const  bad = document.getElementById("bad");
const happy =document.getElementById("happy");
const ok = document.getElementById("ok");
const sad = document.getElementById("sad");
const very = document.getElementById("very");
const normal = document.getElementById("normal");
const No = document.getElementById("no");

let totalscore = 0;
let answerd = 0;

function handleAnsawer(value){
    totalscore+=value;
    answerd++;
    if(answerd===3){
      const energy = Math.round(totalscore/3);
      alert("your energy level is : "+ energy);
    }
}
document.getElementById("good").onclick = () => handleAnsawer(9);
document.getElementById("notgood").onclick = () => handleAnsawer(5);
document.getElementById("bad").onclick = () => handleAnsawer(2);
document.getElementById("happy").onclick = () => handleAnsawer(9);
document.getElementById("ok").onclick = () => handleAnsawer(5);
document.getElementById("sad").onclick = () => handleAnsawer(2);
document.getElementById("very").onclick = () => handleAnsawer(9);
document.getElementById("normal").onclick = () => handleAnsawer(5);
document.getElementById("no").onclick = () => handleAnsawer(2);


