function getComputerChoice() {
    const randomNumber = Math.random();

    if (randomNumber < 1 / 3) {
        return "rock";
    } else if (randomNumber < 2 / 3) {
        return "paper";
    } else {
        return "scissors";
    }
}

const computerSelection = getComputerChoice();

console.log(computerSelection);

function getPlayerChoice() {
    const choice = prompt("Choose rock, paper, or scissors:");
    return choice;
}

const playerSelection = getPlayerChoice();
console.log(playerSelection);

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
}

console.log(playRound("rock", "scissors"));
console.log(playRound("paper", "rock"));
console.log(playRound("scissors", "rock"));
console.log(playRound("paper", "paper"));