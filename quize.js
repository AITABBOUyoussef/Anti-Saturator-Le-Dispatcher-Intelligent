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



