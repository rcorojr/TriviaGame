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
var runningQuestionIndex = 0;

// function to initiate quiz
// function startQuiz(quizField, quizQuest, submitButton, resultsBox){
//     function viewQuest(quizQuest, quizField){
//         var q = quizQuest[runningQuestionIndex];
//         question.innerHTML = "<p>" +question+ "</p>";
//         opt1.innerHTML = q.opt1;
//         opt2.innerHTML = q.opt2;
//         opt3.innerHTML = q.opt3;
//       }
// }
function viewQuest(quizQuest, quizField){
    var q = quizQuest[runningQuestionIndex];
    question.innerHTML = "<p>" +question+ "</p>";
    opt1.innerHTML = q.opt1;
    opt2.innerHTML = q.opt2;
    opt3.innerHTML = q.opt3;
  }

//Timer

var count=100;

var counter=setInterval(timer, 1000);

// document.getElementById("startBtn").addEventListener("click", function timer()
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
// )


