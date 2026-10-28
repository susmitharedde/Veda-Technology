const flashcards = [

{
question:"What does HTML stand for?",
answer:"HyperText Markup Language"
},

{
question:"What is CSS used for?",
answer:"CSS is used to style web pages."
},

{
question:"What is JavaScript?",
answer:"JavaScript makes web pages interactive."
},

{
question:"What is the DOM?",
answer:"DOM stands for Document Object Model."
},

{
question:"Which tag creates a hyperlink?",
answer:"The <a> tag creates hyperlinks."
},

{
question:"What is an Array?",
answer:"An array stores multiple values in one variable."
},

{
question:"What is a Function?",
answer:"A function is a reusable block of code."
},

{
question:"What keyword declares a variable in JavaScript?",
answer:"let, const or var"
},

{
question:"What is Git?",
answer:"Git is a Version Control System."
},

{
question:"What is GitHub?",
answer:"GitHub is a platform to host Git repositories."
}

];

let currentIndex = 0;

const flashcard = document.getElementById("flashcard");
const question = document.getElementById("question");
const answer = document.getElementById("answer");
const progress = document.getElementById("progress");

function loadCard(){

question.textContent=flashcards[currentIndex].question;

answer.textContent=flashcards[currentIndex].answer;

progress.textContent=`Card ${currentIndex+1} of ${flashcards.length}`;

flashcard.classList.remove("flip");

}

loadCard();

flashcard.addEventListener("click",()=>{

flashcard.classList.toggle("flip");

});

document.getElementById("next").addEventListener("click",()=>{

currentIndex++;

if(currentIndex>=flashcards.length){

currentIndex=0;

}

loadCard();

});

document.getElementById("prev").addEventListener("click",()=>{

currentIndex--;

if(currentIndex<0){

currentIndex=flashcards.length-1;

}

loadCard();

});