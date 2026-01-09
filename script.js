function computerAnswer() {
        return Math.random();
}

function getComputerChoice() { 
    if (computerAnswer() <0.33) {
        console.log("rock");
    }
    else if (computerAnswer() <0.66) {
        console.log("paper");
    }
    else {
        console.log("scissors");
    }
}

function getHumanChoice() {
    let sign = prompt("Do you choose rock, paper, or scissors?");
    if (sign === "rock") {
        console.log("rock");
    } else if (sign === "paper") {
        console.log("paper");
    } else if (sign === "scissors") {
        console.log("scissors");
    }
}
