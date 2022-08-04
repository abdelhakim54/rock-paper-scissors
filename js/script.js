let computerScore = 0;
let playerScore = 0;


function getComputerChoice(){
    const choices = ["✊","✋","✌"];
    return(choices[Math.floor(Math.random()*3)]);
}

function playRound(playerSelection, computerSelection){

    playerSelection = playerSelection.trim().toLowerCase();
    computerSelection = computerSelection.trim().toLowerCase();

    if (playerSelection == computerSelection){
        return("tie");
    }

    else if ((playerSelection == "rock" && computerSelection == "scissors") ||
                (playerSelection == "paper" && computerSelection == "rock") ||
                (playerSelection == "scissors" && computerSelection == "paper")){
                    playerScore++;
                    return("player");
                }
    else if ((playerSelection == "rock" && computerSelection == "paper")||
             (playerSelection == "paper" && computerSelection == "scissors")||
             (playerSelection == "scissors" && computerSelection == "rock")){
                computerScore++;
                return("computer");
    }
}

function getSelection(Sign){
    if (Sign == '✊')return "rock";
    else if (Sign == '✋')return "paper";
    else if (Sign == '✌')return "scissors";
}

function updateScore (result){
    if(result == "player"){
        playerScoreText.textContent = `Player: ${playerScore}`;
    }
    else if(result == "computer"){
        computerScoreText.textContent = `Computer: ${computerScore}`;
    }
}

function updateRoundResult(result){
    if(result == "tie") roundResult.textContent = "it's a Tie";
    else if(result == "player") roundResult.textContent = "You Win!";
    else if(result == "computer") roundResult.textContent = "You Lose!"
}

function isEndGame(){
    return(playerScore == 5 || computerScore == 5)
}

function anounceWinner(){
    if(isEndGame()){
        if (playerScore == 5){
            finalResult.textContent =  "Confratulations! You Won";
            finalResult.classList.add("win");
        }
        else{
            finalResult.textContent =  "You Lost the game ...";
            finalResult.classList.add("lost")
        }
    }
}

const options = Array.from(document.querySelectorAll(".btn"));

const playerSign = document.querySelector(".player > div");
const computerSign = document.querySelector(".computer > div");

const playerScoreText = document.querySelector(".player > p");
const computerScoreText = document.querySelector(".computer > p");

const roundResult = document.querySelector(".round-result");

const finalResult = document.querySelector(".final-result");

options.forEach( option => {
    option.addEventListener("click", function (e){
        if(isEndGame()){
            return;
        }

        handleGame(e.target.textContent);
        
});
});

function handleGame(playerWeapon){
    const playerSelection = playerWeapon;
    const computerSelection = getComputerChoice();

    playerSign.textContent = playerSelection;
    computerSign.textContent = computerSelection;

    const result = playRound(getSelection(playerSelection), getSelection(computerSelection));
    
    updateScore(result);
    
    updateRoundResult(result);
    anounceWinner();

};


