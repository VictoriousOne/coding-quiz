var pRemove = $("#pRem");
var startBtn = $("#start");
var answersDiv = $("#answers");
var question = $("#card-header");
var timeLeft = $("#myTime");
var answerBtn1;
var answerBtn2;
var answerBtn3;
var answerBtn4;
var tempBtn;
var startTimer;
let secs = 75;

var firstLoad = 1;
var ndx = 0;
var score = 0;

var quiz = [
    {
        "question": "What is the first index of an array?",
        "ans1": ["1", "0"],
        "ans2": ["array length", "0"],
        "ans3": ["0", "1"],
        "ans4": ["A", "0"]
    },
    {
        "question": "Which of the following is correct?",
        "ans1": ["jQuery is a javaScript Library", "1"],
        "ans2": ["jQuery is a JSON library", "0"],
        "ans3": ["jQuery is an Angular library", "0"],
        "ans4": ["All the answers are true", "0"]
    },
    {
        "question": "Which of the following methods is used to hide selected items?",
        "ans1": ["visible(false)", "0"],
        "ans2": ["hidden()", "0"],
        "ans3": ["display(none)", "0"],
        "ans4": ["hide()", "1"]
    },
    {
        "question": "Which of the following replaces $(document).ready(f)?",
        "ans1": ["jQuery(f)", "0"],
        "ans2": ["$(f)", "1"],
        "ans3": ["#(f)", "0"],
        "ans4": ["None of the above", "0"]
    },
    {
        "question": "What are jQuery's features?",
        "ans1": ["Useful collection of methods for manipulating selected items.", "0"],
        "ans2": ["Efficient query method to find all document elements", "0"],
        "ans3": ["Syntax for referencing document elements", "0"],
        "ans4": ["All the answers are true", "1"]
    }
];

function displayScore() {
    console.log("You got " + score + " correct")
}

function loadQuestion(event) {

  
    if (!(event == 1)) {
        console.log("data-anser is " + event.target.getAttribute("data-answer"));
        if ((event.target.getAttribute("data-answer")) == 1) {
            score++;
            console.log("score is " + score);
        }
        else if ((event.target.getAttribute("data-answer")) == 0) {
            secs = secs - 10;
        }
    }

    console.log((event));
    if (ndx <= (quiz.length - 1)) {
        
        question.text(quiz[ndx].question);

        answerBtn1.html(quiz[ndx].ans1[0]).attr("data-answer", quiz[ndx].ans1[1]);
        answerBtn2.html(quiz[ndx].ans2[0]).attr("data-answer", quiz[ndx].ans2[1]);
        answerBtn3.html(quiz[ndx].ans3[0]).attr("data-answer", quiz[ndx].ans3[1]);
        answerBtn4.html(quiz[ndx].ans4[0]).attr("data-answer", quiz[ndx].ans4[1]);

        ndx++;
    }

    if ((ndx == quiz.length) || (secs <= 0)) {
        clearInterval(startTimer);
        displayScore();
    }
}

function countDown() {
    timeLeft.html("Time: " + secs.toString());

    if (secs <= 0) {
        clearInterval(startTimer);
    }
    secs--;

    
    console.log(secounds);
    console.log(timeLeft);
}

function questionPrep() {
    pRemove.remove();
    startBtn.unbind("click", questionPrep);
    
    startBtn.remove(); 
    /*document.querySelector("#pRem").remove();*/

    /* repurpose start button 
    startBtn.unbind("click", questionPrep);
    startBtn.attr('id', 'Answer1').attr('outline', 'none');*/

    answerBtn1 = tempBtn.clone().attr('id', 'Answer1').html("Answer1");
    answersDiv.append(answerBtn1);

    answerBtn2 = tempBtn.clone().attr('id', 'Answer2').html("answer2");
    answersDiv.append(answerBtn2);

    answerBtn3 = tempBtn.clone().attr('id', 'Answer3').html("answer3");
    answersDiv.append(answerBtn3);

    answerBtn4 = tempBtn.clone().attr('id', 'Answer4').html("answer4");
    answersDiv.append(answerBtn4);


    answerBtn1.on("click", loadQuestion);
    answerBtn2.on("click", loadQuestion);
    answerBtn3.on("click", loadQuestion);
    answerBtn4.on("click", loadQuestion);
   
    loadQuestion(firstLoad);
    startTimer = setInterval(countDown, 1000);
    
}
tempBtn = startBtn.clone();
startBtn.on("click", questionPrep);
/*document.querySelector("#start").addEventListener("click", questionPrep);*/