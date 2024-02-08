// Here we start the code 

function getComputerChoice() {
    var randDecimal = Math.random();

    var randInt = Math.floor(randDecimal * 3);

    // To observe and track 
    // console.log(randInt);

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
        return ["You Win! Rock beats Sizzors", 1];
    }else if ((playerSelLower == 'rock') && (computerSelection == 'Paper')) {
        return ["You Lose! Paper beats Rock", 0];
    }else if ((playerSelLower == 'paper') && (computerSelection == 'Rock')) {
        return ["You Win! Papaer beats Rock", 1];
    }else if ((playerSelLower == 'paper') && (computerSelection == 'Sizzors')) {
        return ["You Lose! Sizzors beat Paper", 0];
    }else if ((playerSelLower == 'sizzors') && (computerSelection == 'Rock')) {
        return ["You Lose! Rock beats Sizzors", 0];
    }else if ((playerSelLower == 'sizzors') && (computerSelection == 'Paper')) {
        return ["You Win! Sizzors beat Paper", 1];
    }

    else {
        return ["It's a draw!!", 2];
    }
}

function playGame() {

    let winPlayer = 0;
    let winComp = 0;

    for (var i = 0; i < 5; i++) {
        let playerSel = prompt("Type your selection (Rock, Paper, or Sizzors): ");

        let playList = playRound(playerSel, getComputerChoice());

        alert(playList[0]);

        if (playList[1] == 0) {
            winPlayer++;
        }else if (playList[1] == 1) {
            winComp++;
        }
    }

    if (winPlayer>winComp) {
        console.log("Player: " + winPlayer + " and Computer: " + winComp);
        return "You Win!! Congrats!";
    }else if (winComp>winPlayer) {
        console.log("Player: " + winPlayer + " and Computer: " + winComp);
        return "You Lose! Too Bad!";
    }else {
        console.log("Player: " + winPlayer + " and Computer: " + winComp);
        return "It's a draw!";
    }

}

console.log(playGame())