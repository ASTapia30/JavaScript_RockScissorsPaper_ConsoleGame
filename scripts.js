function computerPlay(){
    let options = ["Rock", "Paper", "Scissors"];
    return options[Math.floor(Math.random()*options.length)];
}

function validationSteps(playerSelection){
    let options = ["rock", "paper", "scissors"];
   
    if(typeof(playerSelection) !== "string"){
        return {
            winner: "FAIL",
            message: "You made a mistake!!!, MUAHAHAHAHA! Rounds reset to 0"
        }
    }

    if(!options.includes(playerSelection.toLowerCase())){
        return {
            winner: "FAIL",
            message: "You made a mistake!!!, MUAHAHAHAHA! Rounds reset to 0"
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

function Game(){
    let scorePlayer = 0;
    let scoreComp = 0;
    let round = 1;
    console.log('Starting the game...');

    while (round != 6){
        console.log("|------------------Round #" + round +" ------------------|");
        var playerSelection = prompt("Pick your choice: Rock / Scissors / Paper");
        var computerSelection = computerPlay();
        var result = playRound(playerSelection,computerSelection);
        
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
                scoreComp = 0;
                scorePlayer = 0;
                round = 1;
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

console.log('Press any key to start...');
document.addEventListener('keydown', Game);