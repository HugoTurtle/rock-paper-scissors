//Building the game in console//

const Rock = "Rock";
const Paper = "Paper";
const Scissors = "Scissors";
let playerScore = 0;
let computerScore = 0;
//User//

function playerChoice(choice) {

    if (choice === "rockBtn") {
        console.log("You played Rock");
        return (Rock);
    }
    else if (choice === "paperBtn") {
        console.log("You played Paper");
        return (Paper);
    }
    else if (choice === "scissorBtn") {
        console.log("You played Scissors");
        return (Scissors);
    }
    else {
        console.log("Sorry please reload and try again");
        return " ";
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
            computerScore += 1;
            return "You Lose! Paper beats Rock";
        }
        else if (computerSelection === Scissors) {
            playerScore += 1;
            return "You Win! Rock beats Scissors";
        }
        else {
            return "It's a tie!";
        }

    }
    if (playerSelection === Paper) {
        if (computerSelection === Rock) {
            playerScore += 1;
            return "You Win! Paper beats Rock";
        }
        else if (computerSelection === Scissors) {
            computerScore += 1;
            return "You Lose! Scissors beats Paper";
        }
        else {
            return "It's a tie!";
        }
    }
    if (playerSelection === Scissors) {
        if (computerSelection === Rock) {
            computerScore += 1;
            return "You Lose! Rock beats Scissors";
        }
        else if (computerSelection === Paper) {
            playerScore += 1;
            return "You Win! Scissors beats Paper";
        }
        else {
            return "It's a tie!";
        } 
    }
 }

function game() {
    const buttons = document.querySelectorAll('button');

    buttons.forEach((button) => {
    
        button.addEventListener('click', () => {
            console.log(determineWinner(playerChoice(button.id), computerChoice() ));
            console.log(playerScore);
            console.log(computerScore);
            if(playerScore == 5) {
                document.getElementById("button").disabled = true;
            }
            else if(computerScore == 5) {
                document.getElementById("button").disabled = true;
            }
        });
    }); //End for each
 }

 game();