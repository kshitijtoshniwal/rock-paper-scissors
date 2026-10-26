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

function getPlayerChoice() {
    while (true) {
        const choice = prompt("Choose rock, paper, or scissors:");

        if (choice === null) {
            alert("Please enter a choice to continue.");
            continue;
        }

        const normalizedChoice = choice.trim().toLowerCase();

        if (
            normalizedChoice === "rock" ||
            normalizedChoice === "paper" ||
            normalizedChoice === "scissors"
        ) {
            return normalizedChoice;
        }

        alert("Invalid choice! Please enter rock, paper, or scissors.");
    }
}


function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        console.log(`It's a tie! Both chose ${playerSelection}.`);
        return "tie";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
        return "win";
    } else {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}.`);
        return "lose";
    }
}

function playGame() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();

        const result = playRound(playerSelection, computerSelection);

        if (result === "win") {
            playerScore = playerScore + 1;
        } else if (result === "lose") {
            computerScore = computerScore + 1;
        }

        console.log(`Score — Player: ${playerScore}, Computer: ${computerScore}`);
    }

    console.log("Game over!");
    console.log(`Final score — Player: ${playerScore}, Computer: ${computerScore}`);
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

    resultDisplay.textContent =
        `You chose scissors. Computer chose ${computerSelection}. Result: ${result}.`;
});


const resultDisplay = document.querySelector("#result");

const scoreDisplay = document.querySelector("#score");

let playerScore = 0;
let computerScore = 0;