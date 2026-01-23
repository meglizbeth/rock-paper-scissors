function getComputerChoice() {   
    const computerChoice = Math.random();
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
    const humanChoice = prompt("Do you choose rock, paper, or scissors?");
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
const maxScore = 5;



function playRound() {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    
    console.log("You chose " + humanSelection + ".");
    console.log("Computer chose " + computerSelection + ".");
    if (humanSelection === computerSelection) {
        console.log("Draw.");
    } else if 
        (humanSelection === "rock" && computerSelection === "scissors" ||
        humanSelection === "paper" && computerSelection === "rock" ||
        humanSelection === "scissors" && computerSelection === "paper") {
        console.log("You won this round!");
        humanScore++;
    } else {
        console.log("The computer won this round.")
        computerScore++;
    }
        console.log("Your score is " + humanScore + ". The computer's score is " + computerScore + ".");
};

function endGame() {
    console.log("Game over! Your final score is " + humanScore
            + " and the computer's final score is " + computerScore + ".");
    if (humanScore > computerScore) {
        console.log("You won the game!");
    }
    else if (computerScore > humanScore) {
        console.log("The computer won the game.");
    }
    else if (humanScore === computerScore) {
        console.log("It's a tie!");
    }
};

function playGame() {
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
    endGame();
};

playGame();


