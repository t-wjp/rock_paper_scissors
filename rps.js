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
    while (error_flag != 1) {  
        let choice = prompt("What is your selection?")
        if (choice == "Rock" || choice == "Paper" || choice == "Scissors") {
            error_flag = 1;
        }
        else {
            choice = prompt("Enter a valid selection?");
        }
    }
    return choice;
}


console.log("Hello World") 
console.log(getComputerChoice())
console.log(getHumanChoice())