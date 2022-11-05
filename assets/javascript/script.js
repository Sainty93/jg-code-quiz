var questionElement = document.getElementById("questions_text");
var buttonA = document.getElementById("answer-a");
var buttonA = document.getElementById("answer-b");
var buttonA = document.getElementById("answer-c");
var buttonA = document.getElementById("answer-d");
var startbutton = document.getElementById("start_btn");

startbutton.addEventListener("click", function(){
    console.log("buttonwasclicked");
    startquiz();
})



var questions = [
    {
        question: "What is NOT a javascript data type?",
        choices: ["string", "boolean", "alert", "number"],
        answer: "alert"
    },
    {
        question: "What is NOT a javascript data type?",
        choices: ["string", "boolean", "alert", "number"],
        answer: "alert"
    },
    {
        question: "What is NOT a javascript data type?",
        choices: ["string", "boolean", "alert", "number"],
        answer: "alert"
    },
    {
        question: "What is NOT a javascript data type?",
        choices: ["string", "boolean", "alert", "number"],
        answer: "alert"
    }
]



function startquiz(){
    console.log("I need to write my start quiz options")
}