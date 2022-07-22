function getComputerChoice(){
    const choices = ["rock","paper","scissors"];
    return(choices[Math.floor(Math.random()*3)]);
}

function playRound(playerSelection, computerSelection){
    if(playerSelection.toLowerCase() == "rock"){

        if(computerSelection.toLowerCase() == "scissors") return("You Win! rock beats scissors");
        else if(computerSelection.toLowerCase() == "paper") return("You Lose! paper beats rock");
        else if(computerSelection.toLowerCase() == "rock") return("It's a Draw");
    
    }
    else if(playerSelection.toLowerCase() == "paper"){

        if(computerSelection.toLowerCase() == "rock") return("You Win! paper beats rock");
        else if(computerSelection.toLowerCase() == "scissors") return("You Lose! scissors beats paper");
        else if(computerSelection.toLowerCase() == "paper") return("It's a Draw");
    
    }
    else if(playerSelection.toLowerCase() == "scissors"){

        if(computerSelection.toLowerCase() == "paper") return("You Win! scissors beats paper");
        else if(computerSelection.toLowerCase() == "rock") return("You Lose! rock beats scissors");
        else if(computerSelection.toLowerCase() == "scissors") return("It's a Draw");

    }
}

function game(){
    let numberOfwins = 0;
    for(let i = 0; i < 5; i++){
        let computerSelection = getComputerChoice();
        let playerSelection = prompt("enter your choice ('rock', 'paper' ,or 'scissors')");
        let result = playRound(playerSelection, computerSelection);
        if (result.includes("Win")) numberOfwins++;
        else if (result.includes("Lose")) numberOfwins--;

        console.log(result);
    }

    if(numberOfwins > 0) console.log("Congratulations! You won this game .");
    else if(numberOfwins < 0) console.log("Unfortunately! You lost this game, Try again!");
    else console.log("This game ended with a Draw");
}