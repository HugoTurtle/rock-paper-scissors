//Building the game in console//

const Rock = "Rock";
const Paper = "Paper";
const Scissors = "Scissors";

//User//

function promptUser() {
    let result = window.prompt("Please enter Rock, Paper, or Scissors.");
    return result;
}

function playerChoice() {
    let choice =  promptUser();

    if (choice.toLowerCase() === "rock") {
        console.log("You played Rock");
        return (Rock);
    }
    else if (choice.toLowerCase() === "paper") {
        console.log("You played Paper");
        return (Paper);
    }
    else if (choice.toLowerCase() === "scissors") {
        console.log("You played Scissors");
        return (Scissors);
    }
    else {
        console.log("Sorry please reload and try again");
    }
}


//Computer//

function getRandomNumber() {
   return Math.floor(Math.random() * 3) + 1
}

function computerChoice() {
    let randomNumber = getRandomNumber()
    switch(randomNumber) {
        case 1 : 
            console.log("The computer played",Rock);
            return Rock;
        case 2 :
            console.log("The computer played",Paper);
            return Paper;
        case 3 : 
            console.log("The computer played",Scissors);
            return Scissors;
    }
};


 //Determining the winner//

 function determineWinner(playerSelection, computerSelection) {

    if (playerSelection === Rock) {
        if (computerSelection === Paper) {
            return "You Lose! Paper beats Rock";
        }
        else if (computerSelection === Scissors) {
            return "You Win! Rock beats Scissors";
        }
        else {
            return "It's a tie!";
        }

    }
    if (playerSelection === Paper) {
        if (computerSelection === Rock) {
            return "You Win! Paper beats Rock";
        }
        else if (computerSelection === Scissors) {
            return "You Lose! Scissors beats Paper";
        }
        else {
            return "It's a tie!";
        }
    }
    if (playerSelection === Scissors) {
        if (computerSelection === Rock) {
            return "You Lose! Rock beats Scissors";
        }
        else if (computerSelection === Paper) {
            return "You Win! Scissors beats Paper";
        }
        else {
            return "It's a tie!";
        } 
    }
 }

 function game() {
     for(let i = 0; i < 5; ++i) {
        console.log(determineWinner(playerChoice(), computerChoice() ));
     }
 }
game();