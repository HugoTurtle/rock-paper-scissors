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
    const buttons = document.querySelectorAll('button'); //Makes a node list of all the buttons
    const textContainer = document.querySelector('#text-container'); //Grabs an element where I'll put all the text
    const div = document.createElement('div');  //Box surronding text                 
    div.setAttribute('style', 'background-color: #eef5db; margin: auto; width: 50%; border: 3px solid #4f6367'); //Styling the box
    const p = document.createElement('p'); //text
    p.setAttribute('style', 'white-space: pre; text-align: center; font-size: 20px;'); //Used for new lines, as well as styling the text

    buttons.forEach((button) => {
    
        button.addEventListener('click', () => {

            p.textContent = determineWinner(playerChoice(button.id), computerChoice()) + "\r\n";
            p.textContent += "Player Score   " +playerScore + "-" + computerScore + "   Computer Score \r\n";
   
            div.appendChild(p);
            textContainer.appendChild(div);


            if(playerScore == 5 || computerScore == 5) {
                if(playerScore == 5) {
                    p.textContent += "You win! Please reload to play again! \r\n";
                }
                else if(computerScore == 5) {
                    p.textContent += "You lost! Please reload to play again! \r\n";
                }
                var elems = document.getElementsByClassName("btn");
                for(var i = 0; i < elems.length; i++) {
                    elems[i].disabled = true;
                }
            }
            else {
                document.querySelector('button').disabled = false;
            }
        });
    }); //End for each
 }

 game();