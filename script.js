

function getComputerChoice() {  
    let computerChoice = Math.random();
    
    if (computerChoice <0.33) {
        return "rock";
    }
    else if (computerChoice <0.66) {
        return "paper";
    }
    else {
        return "scissors";
    }
};



function getHumanChoice() {
    let humanChoice = prompt("Do you choose rock, paper, or scissors?");   
    
    if (humanChoice.toLowerCase() === "rock") {
        return "rock";
        } 
        else if (humanChoice.toLowerCase() === "paper") {
            return "paper";
        } 
        else if (humanChoice.toLowerCase() === "scissors") {
            return "scissors";
        }
    };

let humanScore = 0;
let computerScore = 0;

function playRound() {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();

    if (humanSelection === "rock" && computerSelection === "paper") {
        return "Paper beats rock. You lose!";
        } else if (humanSelection === "rock" && computerSelection === "scissors") {
            return "Rock beats scissors. You win!";
        } else if (humanSelection === "rock" && computerSelection === "rock") {
            return "You both played rock. You tie!";
        } else if (humanSelection === "paper" && computerSelection === "rock") {
            return "Paper beats rock. You win!";
        } else if(humanSelection === "paper" && computerSelection === "paper") {
            return "You both played paper. You tie!";
        } else if(humanSelection === "paper" && computerSelection === "scissors") {
            return "Scissors beats paper. You lose!";
        } else if(humanSelection  === "scissors" && computerSelection === "rock") {
            return "Rock beats scissors. You lose!";
        } else if(humanSelection  === "scissors" && computerSelection === "paper") {
            return "Scissors beats paper. You win!";
        } else if(humanSelection === "scissors" && computerSelection === "scissors") {
            return "You both played scissors. You tie!";
        }
    };





