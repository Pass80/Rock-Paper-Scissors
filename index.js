const gameOptions = ['rock', 'scissors', 'paper'];
const STATE_WIN = 'You win';
const STATE_LOSE = 'Computer wins';
const STATE_DRAW = 'Tie';
let playerSelection = null;
let computerSelection = null;
let roundResult = document.getElementById('round-result').innerHTML;
let playerScore = document.getElementById('player-score').innerHTML;
let computerScore = document.getElementById('computer-score').innerHTML;
const rockElement = document.getElementById('rock');
const paperElement = document.getElementById('paper');
const scissorsElement = document.getElementById('scissors');
const changePlayerClass = document.getElementById('main-image');
const changeComputerClass = document.getElementById('main-image2');
const computerPlay = () => {
    return gameOptions[Math.floor(Math.random() * 3)];
};
// create a function which removes the added classes at every begin of the round
const removeClasses = () => {
    document.getElementById('main-image').classList.remove('rock');
    document.getElementById('main-image').classList.remove('scissors');
    document.getElementById('main-image').classList.remove('paper');
    document.getElementById('main-image2').classList.remove('scissors');
    document.getElementById('main-image2').classList.remove('paper');
    document.getElementById('main-image2').classList.remove('rock');
};

rockElement.addEventListener('click', () => {
    document.getElementById('round-result').innerHTML = '';
    removeClasses();
    const timeOut = setTimeout(() => {
        document.getElementById('main-image').classList.add('rock');
        document.getElementById('round-result').innerHTML = null;
        playerSelection = gameOptions[0];
        computerSelection = computerPlay();
        if (computerSelection === 'rock') {
            document.getElementById('main-image2').classList.add('rock');
            document.getElementById('round-result').innerHTML = STATE_DRAW;
        }
        if (computerSelection === 'paper') {
            document.getElementById('main-image2').classList.add('paper');
            document.getElementById('round-result').innerHTML = STATE_LOSE;
            document.getElementById('computer-score').innerHTML =
                +document.getElementById('computer-score').innerHTML + 1;
        }
        if (computerSelection === 'scissors') {
            document.getElementById('main-image2').classList.add('scissors');
            document.getElementById('round-result').innerHTML = STATE_WIN;
            document.getElementById('player-score').innerHTML =
                +document.getElementById('player-score').innerHTML + 1;
        }
    }, 2000);
    // clearTimeout(timeOut);
});
paperElement.addEventListener('click', () => {
    document.getElementById('round-result').innerHTML = null;
    removeClasses();
    const timeOut = setTimeout(() => {
        document.getElementById('main-image').classList.add('paper');
        document.getElementById('round-result').innerHTML = null;
        playerSelection = gameOptions[3];
        computerSelection = computerPlay();
        if (computerSelection === 'paper') {
            document.getElementById('main-image2').classList.add('paper');
            document.getElementById('round-result').innerHTML = STATE_DRAW;
        }
        if (computerSelection === 'scissors') {
            document.getElementById('main-image2').classList.add('scissors');
            document.getElementById('round-result').innerHTML = STATE_LOSE;
            document.getElementById('computer-score').innerHTML =
                +document.getElementById('computer-score').innerHTML + 1;
        }
        if (computerSelection === 'rock') {
            document.getElementById('main-image2').classList.add('rock');
            document.getElementById('round-result').innerHTML = STATE_WIN;
            document.getElementById('player-score').innerHTML =
                +document.getElementById('player-score').innerHTML + 1;
        }
    }, 2000);
});
scissorsElement.addEventListener('click', () => {
    document.getElementById('round-result').innerHTML = null;
    removeClasses();
    const timeOut = setTimeout(() => {
        document.getElementById('main-image').classList.add('scissors');
        document.getElementById('round-result').innerHTML = null;
        playerSelection = gameOptions[1];
        computerSelection = computerPlay();

        if (computerSelection === 'scissors') {
            document.getElementById('main-image2').classList.add('scissors');
            document.getElementById('round-result').innerHTML = STATE_DRAW;
        }
        if (computerSelection === 'rock') {
            document.getElementById('main-image2').classList.add('rock');
            document.getElementById('round-result').innerHTML = STATE_LOSE;
            document.getElementById('computer-score').innerHTML =
                +document.getElementById('computer-score').innerHTML + 1;
        }
        if (computerSelection === 'paper') {
            document.getElementById('main-image2').classList.add('paper');
            document.getElementById('round-result').innerHTML = STATE_WIN;
            document.getElementById('player-score').innerHTML =
                +document.getElementById('player-score').innerHTML + 1;
        }
    }, 2000);
});

// const playRound = (player1, computer) => {
//     player1 = player1.toLowerCase();
//     if (player1 === computer) {
//         console.log('No Winner - (Tie)');
//         return STATE_DRAW;
//     }
//     if (player1 === gameOptions[0] && computer === gameOptions[1]) {
//         console.log('You Win ! Rock beats Scissors. ');
//         return STATE_WIN;
//     }
//     if (player1 === gameOptions[0] && computer === gameOptions[2]) {
//         console.log('You Lose ! Paper beats Rock. ');
//         return STATE_LOSE;
//     }
//     if (player1 === gameOptions[2] && computer === gameOptions[1]) {
//         console.log('You Lose ! Scissors beats Paper. ');
//         return STATE_LOSE;
//     }
//     if (player1 === gameOptions[2] && computer === gameOptions[0]) {
//         console.log('You Win ! Paper beats Rock. ');
//         return STATE_WIN;
//     }
//     if (player1 === gameOptions[1] && computer === gameOptions[0]) {
//         console.log('You Lose ! Rock beats Scissors . ');
//         return STATE_LOSE;
//     }
//     if (player1 === gameOptions[1] && computer === gameOptions[2]) {
//         console.log('You Win ! Scissors beats Paper. ');
//         return STATE_WIN;
//     }
// };

// const game = () => {
//     let playerScore = 0;
//     let computerScore = 0;

//     for (let i = 0; i < 5; i++) {
//         // const userSelection = window.prompt('Enter rock, scissors, or paper ');
//         const computerSelection = computerPlay();
//         const roundScore = playRound(userSelection, computerSelection);
//         if (roundScore === STATE_WIN) {
//             playerScore++;
//         } else if (roundScore === STATE_LOSE) {
//             computerScore++;
//         }
//     }
//     console.log('Your score : ', playerScore);
//     console.log('Computer score : ', computerScore);

//     if (playerScore > computerScore) {
//         console.log('Final result : You win');
//         return STATE_WIN;
//     }
//     if (playerScore < computerScore) {
//         console.log('Final result : You lose');
//         return STATE_LOSE;
//     }
//     console.log('Final result : Draw');
//     return STATE_DRAW;
// };

// game();
