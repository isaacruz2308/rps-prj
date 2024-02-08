// Here we start the code 

function getComputerChoice() {
    var randDecimal = Math.random();

    var randInt = Math.floor(randDecimal * 3);

    // To observe and track 
    console.log(randInt);

    switch (randInt) {
        case 0:
            return 'Rock';
        case 1: 
            return 'Paper';
        case 2: 
            return 'Sizzors';
        default:
            alert("getComputerChoice function went wrong");
            break;
    }
}

function playRound(playerSelection, computerSelection) {

    let playerSelLower = playerSelection.toLowerCase();

    if ((playerSelLower == 'rock') && (computerSelection == 'Sizzors')) {
        return "You Win! Rock beats Sizzors";
    }else if ((playerSelLower == 'rock') && (computerSelection == 'Paper')) {
        return "You Lose! Paper beats Rock";
    }else if ((playerSelLower == 'paper') && (computerSelection == 'Rock')) {
        return "You Win! Papaer beats Rock";
    }else if ((playerSelLower == 'paper') && (computerSelection == 'Sizzors')) {
        return "You Lose! Sizzors beat Paper";
    }else if ((playerSelLower == 'sizzors') && (computerSelection == 'Rock')) {
        return "You Lose! Rock beats Sizzors";
    }else if ((playerSelLower == 'sizzors') && (computerSelection == 'Paper')) {
        return "You Win! Sizzors beat Paper";
    }

    else {
        return "It's a draw!!";
    }
}

console.log(playRound(prompt("Select: "), getComputerChoice()));