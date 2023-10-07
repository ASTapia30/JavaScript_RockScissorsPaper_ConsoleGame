function computerPlay(){
    let options = ["Rock", "Paper", "Scissors"];
    return options[Math.floor(Math.random()*options.length)];
}

function validationSteps(playerSelection){
    let options = ["rock", "paper", "scissors"];
   
    if(typeof(playerSelection) !== "string"){
        return {
            winner: "FAIL",
            message: "You made a mistake!, Repeat the Round"
        }
    }

    if(!options.includes(playerSelection.toLowerCase())){
        return {
            winner: "FAIL",
            message: "You made a mistake!, Repeat the Round"
        }
    }
}

function playRound(playerSelection, computerSelection){ 
    
    const validationError = validationSteps(playerSelection);
    if(validationError){
        return validationError;
    } 

    let winner;
    let message;
    
    const value = playerSelection.toLowerCase() + "_" + computerSelection.toLowerCase();
    switch (value) {
        case "rock_paper":
            winner = "COM";
            message = "|         You Lose! Paper beats Rock!         |";
            break;
        
        case "rock_scissors":
            winner = "PLAYER";
            message = "|         You Win! Rock beats Scissors!         |";  
            break;     
    
        case "paper_scissors":
            winner = "COM";
            message = "|         You Lose! Scissors beats Paper!        |";
            break;
        case "paper_rock":
            winner = "PLAYER";
            message = "|         You Win! Paper beats Rock!          |";
            break;
        case "scissors_rock":
            winner = "COM";
            message = "|         You Lose! Rock beats Scissors!         |";
            break;
        case "scissors_paper":
            winner = "PLAYER";
            message = "|         You Win! Scissors beats paper!         |";
            break;
        default:
            winner = "TIE";
            message = "|                It's a Tie, repeat.                |";
            break;
    }
    return {winner, message};
}

function game(){
    let scorePlayer = 0;
    let scoreComp = 0;
    let round = 1;
    console.log('Starting the game...');

    while (round != 6){
        console.log("|------------------Round #" + round +" ------------------|");
        let playerSelection = prompt("Pick your choice: Rock / Scissors / Paper");
        let computerSelection = computerPlay();
        let result = playRound(playerSelection,computerSelection);
        
        switch (result.winner) {
            case "PLAYER":
                console.log("| Computer chose: " + computerSelection + "                        |")
                console.log(result.message);
                scorePlayer = scorePlayer + 1;
                round = round + 1;
                console.log("||    Player: " + scorePlayer + "      ||      " + " Computer: " + scoreComp + "    ||")
                console.log("|                                             |")
                console.log("|_____________________________________________|")
                console.log("")
                break;

            case "COM":
                console.log("| Computer chose: " + computerSelection + "                        |")
                console.log(result.message);
                scoreComp = scoreComp + 1;
                round = round + 1;
                console.log("||    Player: " + scorePlayer + "      ||      " + " Computer: " + scoreComp + "    ||")
                console.log("|                                             |")
                console.log("|_____________________________________________|")
                console.log("")
                break;

            case "TIE":
                console.log("| Computer chose: " + computerSelection + "                        |")
                console.log(result.message);
                console.log("||    Player: " + scorePlayer + "      ||      " + " Computer: " + scoreComp + "    ||")
                console.log("|                                             |")
                console.log("|_____________________________________________|")
                console.log("")
                break;
                
            case "FAIL":
                console.log(result.message);
                scoreComp = scoreComp;
                scorePlayer = scorePlayer;
                round = round;
                console.log("|| Player: " + scorePlayer + "         ||         " + " Computer: " + scoreComp + " ||")
                console.log("|                                             |")
                console.log("|_____________________________________________|")
                console.log("")
                break;
        }
    }
    if (scoreComp > scorePlayer){
        console.log("******************************");
        console.log("*                            *");
        console.log("*         YOU LOSE           *");
        console.log("*                            *");
        console.log("******************************");

    }
    if (scorePlayer > scoreComp){
        console.log("******************************");
        console.log("*                            *");
        console.log("*         YOU WIN            *");
        console.log("*                            *");
        console.log("******************************");
    }
}

game();
