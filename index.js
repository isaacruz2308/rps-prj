// Here we start the code 

function getComputerChoice() {
    var randDecimal = Math.random();

    var randInt = Math.floor(randDecimal * 3);

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

console.log(getComputerChoice());