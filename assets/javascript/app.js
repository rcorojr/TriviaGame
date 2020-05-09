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
    var opt1=$(`<label>${q.opt1}</label><input type='checkbox' data-questionindex=${runningQuestionIndex} data-option=${q.opt1}>`);
    var opt2=$(`<label>${q.opt2}</label><input type='checkbox' data-questionindex=${runningQuestionIndex} data-option=${q.opt2}>`);
    var opt3=$(`<label>${q.opt3}</label><input type='checkbox' data-questionindex=${runningQuestionIndex} data-option=${q.opt3}>`);
    questionelement.append("<p>" + q.question + "</p>");
    questionelement.append(opt1);
    questionelement.append(opt2);
    questionelement.append(opt3);
  }

for (i=0; i<quizQuest.length; i++){
    viewQuest(quizQuest, i)
}

//Timer

var count=200;
var timerInterval=null;
$("input").on("click", function(){
    var currentclickboxindex = $(this).attr("data-questionindex");
    console.log(currentclickboxindex)
    Array.from($("input")).forEach(function(checkbox){
        if ($(checkbox).attr("data-questionindex")==currentclickboxindex

        ){
            console.log("foundmatches")
            $(checkbox).prop("checked", false)
        }
    })
    $(this).prop("checked", true);
    
})


document.getElementById("startBtn").addEventListener("click", function (){
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(timer, 1000)});



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



