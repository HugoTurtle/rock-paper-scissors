//Building the game in console//
const Rock = "Rock";
const Paper = "Paper";
const Scissors = "Scissors";
//User//

function promptUser() {
    let result = window.prompt("Please enter Rock, Paper, or Scissors.");
    return result;
}

let promptPlayer = promptUser(); //Stored to compare strings

function playerChoice() {
    let choice = promptPlayer;

    if (choice.toLowerCase() == "rock") {
        return (Rock);
    }
    else if (choice.toLowerCase() == "paper") {
        return (Paper);
    }
    else if (choice.toLowerCase() == "scissors") {
        return (Scissors);
    }
    else {
        console.log("Sorry please reload and try again");
    }
}

function playerPlay() {
    let player = playerChoice();
        if (!(player == undefined)) {
            console.log("You played", player); 
        }
}
playerPlay(); //Used to display the outcome of the player

//Computer//

computerPlay(); //Used to display the outcome of the computer

function getRandomNumber() {
   return Math.floor(Math.random() * 3) + 1
}

function computerChoice() {
    let randomNumber = getRandomNumber()
    switch(randomNumber) {
        case 1 : 
            return Rock;
        case 2 :
            return Paper;
        case 3 : 
            return Scissors;
    }
};

function computerPlay() {
    let computer = computerChoice();
    console.log("The computer played",computer);
 }

 //Determining the winner//

 function determineWinner(playerSelection, computerSelection) {

    if (playerSelection == Rock) {
        if (computerSelection == Paper) {
            return "You Lose! Paper beats Rock";
        }
        else if (computerSelection == Scissors) {
            return "You Win! Rock beats Scissors";
        }
        else {
            return "It's a tie!";
        }

    }
    if (playerSelection == Paper) {
        if (computerSelection == Rock) {
            return "You Win! Paper beats Rock";
        }
        else if (computerSelection == Scissors) {
            return "You Lose! Scissors beats Paper";
        }
        else {
            return "It's a tie!";
        }
    }
    if (playerSelection == Scissors) {
        if (computerSelection == Rock) {
            return "You Lose! Rock beats Scissors";
        }
        else if (computerSelection == Paper) {
            return "You Win! Scissors beats Paper";
        }
        else {
            return "It's a tie!";
        } 
    }
 }
 console.log(determineWinner(playerChoice(), computerChoice() ));