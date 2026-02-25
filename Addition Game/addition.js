let firstNumEl=document.getElementById("firstNumber");
let secondNumEl=document.getElementById("secondNumber");
let userInputEl=document.getElementById("userInput");
let gameResultEl=document.getElementById("gameResult");

let successMsg="congrats!! You Got it right!";
let tryMsg="Please Try Again!!";

function restartGame(){
    let firstRandomNum=Math.ceil(Math.random()*100);
    let secondRandomNum=Math.ceil(Math.random()*100);

    firstNumEl.textContent=firstRandomNum;
    secondNumEl.textContent=secondRandomNum;

    gameResultEl.textContent="";
    userInputEl.value="";

}

restartGame();

function checkResult(){
    let firstRandomInt=parseInt(firstNumEl.textContent);
    let secondRandomInt=parseInt(secondNumEl.textContent);
    let userEnterText=parseInt(userInputEl.value);

    let sumOfTwoRandomIntegers=firstRandomInt + secondRandomInt;

    if (userEnterText===sumOfTwoRandomIntegers){
        gameResultEl.style.backgroundColor="#028a0f";
        gameResultEl.style.textContent=successMsg;
    }else{
        gameResultEl.textContent=tryMsg;
        gameResultEl.style.backgroundColor="#1e217c";
    }
}



