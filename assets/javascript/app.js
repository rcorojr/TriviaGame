//Array for questions
var quizQuest = [
    {
        question : "How many legs does the Legs of Man have?",
        opt1 : "3",
        opt2 : "1",
        opt3 : "2",
        correct : "3"
    },
    {
        question : "How many legs does the Legs of Man have?",
        opt1 : "3",
        opt2 : "1",
        opt3 : "2",
        correct : "3"
    },
    {
        question : "How many legs does the Legs of Man have?",
        opt1 : "3",
        opt2 : "1",
        opt3 : "2",
        correct : "3"
    },
    {
        question : "How many legs does the Legs of Man have?",
        opt1 : "3",
        opt2 : "1",
        opt3 : "2",
        correct : "3"
    },
    {
        question : "How many legs does the Legs of Man have?",
        opt1 : "3",
        opt2 : "1",
        opt3 : "2",
        correct : "3"
    },
    {
        question : "How many legs does the Legs of Man have?",
        opt1 : "3",
        opt2 : "1",
        opt3 : "2",
        correct : "3"
    },
    {
        question : "How many legs does the Legs of Man have?",
        opt1 : "3",
        opt2 : "1",
        opt3 : "2",
        correct : "3"
    },
    {
        question : "How many legs does the Legs of Man have?",
        opt1 : "3",
        opt2 : "1",
        opt3 : "2",
        correct : "3"
    },
    {
        question : "How many legs does the Legs of Man have?",
        opt1 : "3",
        opt2 : "1",
        opt3 : "2",
        correct : "3"
    },
    {
        question : "How many legs does the Legs of Man have?",
        opt1 : "3",
        opt2 : "1",
        opt3 : "2",
        correct : "3"
    },
]
var lastQuestionIndex = quizQuest.length - 1;

function viewQuest(quizQuest, runningQuestionIndex){
    var q = quizQuest[runningQuestionIndex];
    var questionelement = $("#quiz");
    questionelement.append("<p>" + q.question + "</p>");
    opt1.innerHTML = q.opt1;
    opt2.innerHTML = q.opt2;
    opt3.innerHTML = q.opt3;
  }

for (i=0; i<quizQuest.length; i++){
    viewQuest(quizQuest, i)
}

//Timer

var count=200;
var timerInterval=null;
// var counter=setInterval(timer, 1000);

// document.getElementById("startBtn").addEventListener("click", timer)
document.getElementById("startBtn").addEventListener("click", function (){
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(timer, 1000)});

// document.getElementById("startBtn").addEventListener("click", function() {
//     count=count-1;
//     if (count <= 0)
//     {
//        clearInterval(counter);
//        return;
//     }  
//     document.getElementById("timer").innerHTML=count;
// })

function timer()
{
  count=count-1;
  if (count <= 0)
  {
     clearInterval(counter);
     return;
  }  
  document.getElementById("timer").innerHTML=count;
}



