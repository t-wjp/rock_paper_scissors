
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
    while (true) {  
        if ((humanChoice == "rock" && computerChoice == "scissors") ||
            (humanChoice == "paper" && computerChoice == "rock") ||
            (humanChoice == "scissors" && computerChoice == "paper")) {
                console.log("You win! " + humanChoice + " beats " + computerChoice);
                return "Human";
        } else if (humanChoice == computerChoice) {
                console.log("Draw!");
                return "Tie";
        } else {
                console.log("You lose! " + computerChoice + " beats " + humanChoice);
                return "Computer";
        }
    }
}

function playGame() {
    let round = 5;
    let humanScore = 0;
    let computerScore = 0;
    while (round > 0) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        round -= 1;
        let result = playRound(humanSelection, computerSelection);
        if (result === "Human") {
            humanScore += 1;
        } else if (result === "Computer") {
            computerScore += 1;
        }
    }
    if (humanScore > computerScore) {
        console.log("You win. Your score was " + humanScore + ", while the computer's score was " + computerScore);
    } else if (humanScore < computerScore) {
        console.log("You lose. Your score was " + humanScore + ", while the computer's score was " + computerScore);
    } else {
        console.log("Draw. You both scored " + humanScore + ".");
    }
}

playGame()