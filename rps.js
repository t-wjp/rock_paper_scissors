let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let max = 4;
    let min = 1
    let result = Math.floor(Math.random() * (max - min)) + min;
    let choice = "Rock";
    if (result == 2) {
        choice = "Paper";
    }
    if (result == 3) {
        choice = "Scissors";
    }
    return choice;
}


function getHumanChoice() {
    let error_flag = 0;
    let choice = "";
    while (error_flag != 1) {  
        if (choice == "rock" || choice == "paper" || choice == "scissors") {
            error_flag = 1;
        }
        else {
            choice = prompt("What is your selection?").toLowerCase();
        }
    }
    return choice;
}

function playRound(humanChoice, computerChoice) {
    let humanScore = 0;
    let computerScore = 0;
    let gameOver = 0;
    // let winner = "";
    while (gameOver != 1) {  
        if ((humanChoice == "rock" && computerChoice == "scissors") ||
            (humanChoice == "paper" && computerChoice == "rock") ||
            (humanChoice == "scissors" && computerChoice == "paper")) {
                console.log("You win! " + humanChoice + " beats " + computerChoice);
                humanScore += 1;
                gameOver = 1;
        } else if (humanChoice == computerChoice) {
                winner = "Tie";
                gameOver = 1;
        } else {
                computerScore += 1
                console.log("You lose! " + computerChoice + " beats " + humanChoice)
                gameOver = 1;
        }
    }
}


console.log("Hello World");
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);