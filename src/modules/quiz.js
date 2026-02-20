
import { UI } from './ui.js';

export const quizData = [
    { question: "How was your day?", options: [{text:"Good", value:8}, {text:"Not bad", value:5}, {text:"Bad", value:2}] },
    { question: "How are you feeling?", options: [{text:"Happy", value:9}, {text:"Okay", value:5}, {text:"Sad", value:2}] },
    { question: "How is your motivation?", options: [{text:"High", value:9}, {text:"Normal", value:5}, {text:"Low", value:1}] }
];

let currentStep = 0;
let totalScore = 0;

export function quizzz() {
    currentStep = 0;
    totalScore = 0;
    showNextStep();
}

function showNextStep() {
    if (currentStep < quizData.length) {
        UI.renderQuestion(currentStep, quizData[currentStep], quizData.length, (value) => {
            totalScore += value;
            currentStep++;
            showNextStep(); 
        });
    } else {
        const energy = Math.round(totalScore / quizData.length);
        UI.renderResult(energy);
    }
}