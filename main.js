//Building the game in console

//Determining the winner

//User

let result = window.prompt("Please enter Rock, Paper, or Scissors.");

function playerChoice(choice) {
    if (choice.toLowerCase() == "rock") {
        return ("Rock");
    }
    else if (choice.toLowerCase() == "paper") {
        return ("Paper");
    }
    else if (choice.toLowerCase() == "scissors") {
        return ("Scissors");
    }
    else {
        console.log("Sorry please reload and try again");
    }
}

function playerPlay() {
    let player = playerChoice(result);
    console.log("You played", player); 
}
playerPlay();

//Computer

computerPlay();

function getRandomNumber() {
   return Math.floor(Math.random() * 3) + 1
}

function computerChoice() {
    let randomNumber = getRandomNumber()
    switch(randomNumber) {
        case 1 : 
            return "Rock";
        case 2 :
            return "Paper";
        case 3 : 
            return "Scissors";
    }
};

function computerPlay() {
    let computer = computerChoice();
    console.log("The computer played",computer);
 }