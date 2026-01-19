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

function determineWinner() {
    let result = playRound();
    if (result === "Rock beats scissors. You win!" || 
        "Paper beats rock. You win!" ||
        "Scissors beats paper. You win!") {
            return "humanWin";
        } else if (result === "Paper beats rock. You lose!" ||
        "Scissors beats paper. You lose!" ||
        "Rock beats scissors. You lose!") {
            return "computerWin"; 
        } else if (result === "You both played rock. You tie!" ||
        "You both played paper. You tie!" ||
        "You both played scissors. You tie!") {
            return "draw";
        }
    };

function updateScore() {
    let winner = determineWinner();
    
    if (winner === "humanWin") {
        return humanScore++;
        } else if (winner === "computerWin") {
            return computerScore++;
        }
    };