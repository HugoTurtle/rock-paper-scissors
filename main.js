//Building the game in console

//Determining the winner

//Computer
computerPlay();

//User

//Miscellaneous

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
    console.log(computer);
 }