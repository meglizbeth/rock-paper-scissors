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


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playRound() {
    if (humanSelection === computerSelection) {
        return "draw";
    } else if 
        (humanSelection === "rock" && computerSelection === "scissors" ||
        humanSelection === "paper" && computerSelection === "rock" ||
        humanSelection === "scissors" && computerSelection === "paper") {
        return "humanWin";
    } else {
        return "computerWin";
    }
};    

let humanScore = 0;
let computerScore = 0;
let winner = playRound();

function updateScore() {    
    if (winner === "humanWin") {
        return humanScore +1;
        } else if (winner === "computerWin") {
            return computerScore +1;
    }
};
