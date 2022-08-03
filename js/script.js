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

function getPlayerSelection(playerSelection){
    if (playerSelection == '✊')return "rock";
    else if (playerSelection == '✋')return "paper";
    else if (playerSelection == '✌')return "scissors";
}

function getComputerSelection (computerChoice){
    if (computerChoice == '✊')return "rock";
    else if (computerChoice == '✋')return "paper";
    else if (computerChoice == '✌')return "scissors";
}

function updateScore (result){
    if(result == "player"){
        playerScoreText.textContent = "Player: " + playerScore;
    }
    else if(result == "computer"){
        computerScoreText.textContent = "Computer: " + computerScore;
    }
}

function isEndGame(){
    return(playerScore == 5 || computerScore == 5)
}


const options = document.querySelectorAll(".btn");

const playerChoice = document.querySelector(".player > div");
const computerChoice = document.querySelector(".computer > div");

const playerScoreText = document.querySelector(".player > p");
const computerScoreText = document.querySelector(".computer > p");


options.forEach( option => {
    option.addEventListener("click", function handleGame(e){
        const playerSelection = e.target.textContent;
        const computerSelection = getComputerChoice();

        playerChoice.textContent = playerSelection;
        computerChoice.textContent = computerSelection;

        const result = playRound(getPlayerSelection(playerSelection), getComputerSelection(computerSelection));
        updateScore(result);
});
});

