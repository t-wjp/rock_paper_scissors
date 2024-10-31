console.log("Hello World") 

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

console.log(getComputerChoice())