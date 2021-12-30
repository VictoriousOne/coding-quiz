var pRemove = $("#pRem");
var startBtn = $("#start");
var answersDiv = $("#answers");
var answerBtn1;
var answerBtn2;
var answerBtn3;
var answerBtn4;
var tempBtn;

var firstLoad = 1;



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


    answerBtn1.on("click", loadQuestions);
    answerBtn2.on("click", loadQuestions);
    answerBtn3.on("click", loadQuestions);
    answerBtn4.on("click", loadQuestions);
   
  
}
tempBtn = startBtn.clone();
startBtn.on("click", questionPrep);
/*document.querySelector("#start").addEventListener("click", questionPrep);*/