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


