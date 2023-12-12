let round = 0;
let playerWins = 0;
let computerWins = 0;
let roundTies = 0;

let sendMoveToJs = move => {
    playGame(move);
}
    
let playGame = playerInput => {

    if (round >= 10) {
        location.reload(true)
        return;
    }

    if (playerInput < 1) {
        alert('Only numbers 1 - 3');
        playerInput = prompt('Only numbers 1 - 3');
    }else if (playerInput > 3){
        alert('Only numbers 1 - 3');
        playerInput = prompt('Only numbers 1 - 3');
    }

    let computerInput = Math.floor(Math.random()* 3) + 1;

    if (playerInput == 1) {
        playerMove = 'Rock'
    }else if (playerInput == 2) {
        playerMove = 'Paper'
    }else if (playerInput == 3) {
        playerMove = 'Scissors'
    }

    if (computerInput == 1) {
        computerMove = 'Rock'
    }else if (computerInput == 2) {
        computerMove = 'Paper'
    }else if (computerInput == 3){
        computerMove = 'Scissors'
    }

    if (playerInput == 2 && computerInput == 1) {
        roundResult('You win!');
        playerWins = playerWins + 1;
    }else if (playerInput == 3 && computerInput == 2) {
        roundResult('You win!');
        playerWins = playerWins + 1;
    }else if (playerInput == 1 && computerInput == 3) {
        roundResult('You win!');
        playerWins = playerWins + 1;
    }else if (playerInput == computerInput) {
        roundResult('You tied!');
        roundTies = roundTies + 1;
    }else {
        roundResult('Computer wins!');
        computerWins = computerWins + 1;
    }
        round++;

    if (round < 11) {
        console.log('Round: ' + round);
        htmlResults();
    }
}       
    let roundResult = resultText => {
        let winResultsHtml = document.getElementById('win-results');
        winResultsHtml.textContent = resultText;
    }

    let htmlResults = () => {
        let playerWinsHtml = document.getElementById('player-results');
        playerWinsHtml.textContent = playerWins;

        let computerWinsHtml = document.getElementById('computer-results');
        computerWinsHtml.textContent = computerWins;

        let roundTiesHtml = document.getElementById('tie-results');
        roundTiesHtml.textContent = roundTies;

        let playerMoveHtml = document.getElementById('player-move');
        playerMoveHtml.textContent = playerMove

        let computerMoveHtml = document.getElementById('computer-move');
        computerMoveHtml.textContent = computerMove;
    }