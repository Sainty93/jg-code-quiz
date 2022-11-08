var questionElement = document.getElementById("questions_text");
var buttonA = document.getElementById("answer-a");
var buttonb = document.getElementById("answer-b");
var buttonc = document.getElementById("answer-c");
var buttond = document.getElementById("answer-d");
var startbutton = document.getElementById("start_btn");
var timerEl = document.getElementById("timer_sec");
var time = 60;
var timeId;
var timeLeft = "";



startbutton.addEventListener("click", function(){
    console.log("buttonwasclicked");
    startquiz();
})

function startquiz(){
    timeLeft = time; 
    timeId = setInterval(starttime, 1000);
    timerEl.textContent = time;
}

starttime = function(){
    time--;
    timerEl.textContent = time;
}
function startButton(){

}

const questions = [
    { id: 1, message: 'Which is a Boolean?' },
    { id: 2, message: 'which is an array?' },
    { id: 3, message: 'Which is the THIS element?' },
];

const questionHolder = document.querySelector('#question');
const nextBtn = document.querySelector('#nextbutton');

let currentQuestion = 0;

function renderQuestion(questionIndex) {
    questionHolder.textContent = questions[questionIndex].message;
}

nextBtn.addEventListener('click', function() {
    currentQuestion += 1;

    if(currentQuestion == questions.length -1) {
        nextBtn.textContent = 'submit';

    }
    renderQuestion(currentQuestion);
});

renderQuestion(0);



