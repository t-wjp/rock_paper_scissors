// Game state variables
let round = 5;
let playerScore = 0;
let computerScore = 0;

// Get references to display elements
const resultDiv = document.getElementById('result');
const roundCountDiv = document.getElementById('round-count');
const humanScoreDiv = document.getElementById('human-score')
const computerScoreDiv = document.getElementById('computer-score')

// Add event listeners for each button
document.getElementById('rock').addEventListener('click', () => {
    playGame('rock');
});

document.getElementById('paper').addEventListener('click', () => {
    playGame('paper');
});

document.getElementById('scissors').addEventListener('click', () => {
    playGame('scissors');
});

// Main game logic
function playGame(humanSelection) {
    if (round <= 0) {
        return; // Do nothing if the game has ended
    }

    const computerSelection = getComputerChoice();
    const result = playRound(humanSelection, computerSelection);

    // Update scores based on result
    if (result.includes('You win')) {
        playerScore++;
    } else if (result.includes('You lose')) {
        computerScore++;
    }

    // Decrease round count and update displays
    round--;
    updateResult(result);
    updateRoundCount();
    updateScores(playerScore, computerScore);

    // Check if the game has ended
    if (round === 0) {
        declareWinner();
    }
}

// Function to simulate the computer's choice
function getComputerChoice() {
    let max = 4;
    let min = 1
    let result = Math.floor(Math.random() * (max - min)) + min;
    let choice = "rock";
    if (result == 2) {
        choice = "paper";
    }
    if (result == 3) {
        choice = "scissors";
    }
    return choice;
}

// Function to play a single round and determine the winner
function playRound(humanSelection, computerSelection) {
    if (humanSelection === computerSelection) {
        return `It's a tie! Both chose ${humanSelection}.`;
    }

    if (
        (humanSelection === 'rock' && computerSelection === 'scissors') ||
        (humanSelection === 'paper' && computerSelection === 'rock') ||
        (humanSelection === 'scissors' && computerSelection === 'paper')
    ) {
        return `You win! ${humanSelection} beats ${computerSelection}.`;
    }

    return `You lose! ${computerSelection} beats ${humanSelection}.`;
}

// Function to update the result display
function updateResult(message) {
    resultDiv.textContent = message;
}

// Function to update the round count display
function updateRoundCount() {
    if (round > 0) {
        roundCountDiv.textContent = `Rounds left: ${round}`;
    } else {
        roundCountDiv.textContent = 'Game over!';
    }
}

// Function to update the score count display
function updateScores(playerScore, computerScore) {
    humanScoreDiv.textContent = `Human Score: ${playerScore}`;
    computerScoreDiv.textContent = `Computer Score: ${computerScore}`;
}

// Function to declare the winner after the final round
function declareWinner() {
    if (playerScore > computerScore) {
        resultDiv.textContent = `You win the game! Final score: Player ${playerScore} - Computer ${computerScore}`;
    } else if (playerScore < computerScore) {
        resultDiv.textContent = `You lose the game! Final score: Player ${playerScore} - Computer ${computerScore}`;
    } else {
        resultDiv.textContent = `It's a tie! Final score: Player ${playerScore} - Computer ${computerScore}`;
    }
}