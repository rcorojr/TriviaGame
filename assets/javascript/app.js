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
        question : "What is the Italian word for pie??",
        opt1 : "Calzone",
        opt2 : "Pizza",
        opt3 : "Tarta",
        correct : "Pizza"
    },
    {
        question : "What is the national flower of Wales?",
        opt1 : "Daffodil",
        opt2 : "Sheep thistle",
        opt3 : "Ever breeze",
        correct : "Daffodil"
    },
    {
        question : "Name the port of Rome.",
        opt1 : "Neptune",
        opt2 : "Grande Atterraggio",
        opt3 : " Ostia",
        correct : " Ostia"
    },
    {
        question : "What takes place in Hong Kong's Happy Valley?",
        opt1 : "Horse racing",
        opt2 : "Bird watching",
        opt3 : "Kite flying",
        correct : "Horse racing"
    },
    {
        question : "Which ocean surrounds the Maldives?",
        opt1 : "Pacific Ocean",
        opt2 : "Indian Ocean",
        opt3 : "Arctic Ocean",
        correct : "Indian Ocean"
    },
    {
        question : "In nautical terms, what is the opposite of windward?",
        opt1 : "Forward",
        opt2 : "Neward",
        opt3 : "Leeward",
        correct : "Leeward"
    },
    {
        question : "Which type of entertainment has cars but no roads, curves but no figure, and white knuckles?",
        opt1 : "Roller coaster",
        opt2 : "Rally",
        opt3 : "Le Mans",
        correct : "Roller coaster"
    },
    {
        question : "How many bones does an adult human have?",
        opt1 : "206",
        opt2 : "212",
        opt3 : "219",
        correct : "206"
    },
    {
        question : "Which instrument has forty-seven strings and seven pedals?",
        opt1 : "Harpsichord",
        opt2 : "Harp",
        opt3 : "Piano",
        correct : "Harp"
    },
]
var lastQuestionIndex = quizQuest.length - 1;

function viewQuest(quizQuest, runningQuestionIndex){
    var q = quizQuest[runningQuestionIndex];
    var questionelement = $("#quiz,quiz1");
    var opt1=$(`<label>${q.opt1}</label><input type='checkbox' data-questionindex=${runningQuestionIndex} data-option=${q.opt1}>`);
    var opt2=$(`<label>${q.opt2}</label><input type='checkbox' data-questionindex=${runningQuestionIndex} data-option=${q.opt2}>`);
    var opt3=$(`<label>${q.opt3}</label><input type='checkbox' data-questionindex=${runningQuestionIndex} data-option=${q.opt3}>`);
    questionelement.append("<p>" + q.question + "</p>");
    questionelement.append(opt1);
    questionelement.append(opt2);
    questionelement.append(opt3);
  }



//Timer

var count=200;
var timerInterval=null;



document.getElementById("startBtn").addEventListener("click", function (){
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(timer, 1000)
    $("#startBtn").hide();
    for (i=0; i<quizQuest.length; i++){
        viewQuest(quizQuest, i)
    }
    $("input").on("click", function(){
        var currentclickboxindex = $(this).attr("data-questionindex");
        var option = $(this).attr("data-option");
            if (quizQuest[currentclickboxindex].correct===option
    
            ){
                //this is correct statement
    
            }else {
                //this is the incorrect statement
            }
        Array.from($("input")).forEach(function(checkbox){
            if ($(checkbox).attr("data-questionindex")==currentclickboxindex
    
            ){
                console.log("foundmatches")
                $(checkbox).prop("checked", false)
            }
        })
        $(this).prop("checked", true);
        
    })
});
  



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



