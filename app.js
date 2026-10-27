const resultDisplay = document.querySelector("#result");

const scoreDisplay = document.querySelector("#score");

let playerScore = 0;
let computerScore = 0;

const gameStatusDisplay = document.querySelector("#game-status");

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

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return "tie";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        return "win";
    } else {
        return "lose";
    }
}

const rockButton = document.querySelector("#rock");

rockButton.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    const result = playRound("rock", computerSelection);
    if (result === "win") {
        playerScore++;
    } else if (result === "lose") {
        computerScore++;
    }

    scoreDisplay.textContent =
        `Player: ${playerScore} | Computer: ${computerScore}`;

    if (playerScore === 5 || computerScore === 5) {
        gameStatusDisplay.textContent =
            playerScore === 5 ? "You won the game!" : "Computer won the game!";

        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
    };

    resultDisplay.textContent =
        `You chose rock. Computer chose ${computerSelection}. Result: ${result}.`;
});

const paperButton = document.querySelector("#paper");

paperButton.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    const result = playRound("paper", computerSelection);
    if (result === "win") {
        playerScore++;
    } else if (result === "lose") {
        computerScore++;
    }

    scoreDisplay.textContent =
        `Player: ${playerScore} | Computer: ${computerScore}`;

    if (playerScore === 5 || computerScore === 5) {
        gameStatusDisplay.textContent =
            playerScore === 5 ? "You won the game!" : "Computer won the game!";

        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
    }
    resultDisplay.textContent =
        `You chose paper. Computer chose ${computerSelection}. Result: ${result}.`;
});

const scissorsButton = document.querySelector("#scissors");

scissorsButton.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    const result = playRound("scissors", computerSelection);
    if (result === "win") {
        playerScore++;
    } else if (result === "lose") {
        computerScore++;
    }

    scoreDisplay.textContent =
        `Player: ${playerScore} | Computer: ${computerScore}`;

    if (playerScore === 5 || computerScore === 5) {
        gameStatusDisplay.textContent =
            playerScore === 5 ? "You won the game!" : "Computer won the game!";

        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
    }

    resultDisplay.textContent =
        `You chose scissors. Computer chose ${computerSelection}. Result: ${result}.`;
});


