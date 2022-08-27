const gameOptions = ['rock', 'scissors', 'paper'];
const STATE_WIN = 'You win';
const STATE_LOSE = 'Computer wins';
const STATE_DRAW = 'Tie';
let playerSelection = null;
let computerSelection = null;
const roundResult = document.getElementById('round-result');
const playerScore = document.getElementById('player-score');
const computerScore = document.getElementById('computer-score');
const rockElement = document.getElementById('rock');
const paperElement = document.getElementById('paper');
const scissorsElement = document.getElementById('scissors');
const changePlayerClass = document.getElementById('main-image');
const changeComputerClass = document.getElementById('main-image2');
const restartBtn = document.getElementById('restart');
const exitBtn = document.getElementById('exit');
const mainImage = document.getElementById('main-image');
const mainImage2 = document.getElementById('main-image2');
const windowMessage = document.getElementById('myModal');
const finalScore = document.getElementById('finalres');

restartBtn.addEventListener('click', () => {
    removeClasses();
    windowMessage.style.display = 'none';
    roundResult.innerHTML = '';
    playerScore.innerHTML = 0;
    computerScore.innerHTML = 0;
});

exitBtn.addEventListener('click', () => {
    window.close();
    console.log('hi');
});
// create a function which makes random selection for the computer
const computerPlay = () => {
    return gameOptions[Math.floor(Math.random() * 3)];
};
// create a function which removes the added classes at every begin of the round
const removeClasses = () => {
    mainImage.classList.remove('rock');
    mainImage.classList.remove('scissors');
    mainImage.classList.remove('paper');
    mainImage2.classList.remove('scissors');
    mainImage2.classList.remove('paper');
    mainImage2.classList.remove('rock');
};

rockElement.addEventListener('click', () => {
    roundResult.innerHTML = '';
    removeClasses();
    const timeOut = setTimeout(() => {
        mainImage.classList.add('rock');
        // roundResult.innerHTML = '';
        playerSelection = gameOptions[0];
        computerSelection = computerPlay();
        if (computerSelection === 'rock') {
            mainImage2.classList.add('rock');
            roundResult.innerHTML = STATE_DRAW;
        }
        if (computerSelection === 'paper') {
            mainImage2.classList.add('paper');
            roundResult.innerHTML = STATE_LOSE;
            computerScore.innerHTML = +computerScore.innerHTML + 1;
        }
        if (computerSelection === 'scissors') {
            mainImage2.classList.add('scissors');
            roundResult.innerHTML = STATE_WIN;
            playerScore.innerHTML = +playerScore.innerHTML + 1;
        }
        if (computerScore.innerHTML === '5' || playerScore.innerHTML === '5') {
            windowMessage.style.display = 'block';
            finalScore.innerHTML = `You ${playerScore.innerHTML} - ${computerScore.innerHTML} Computer `;

            console.log('hi');
        }
    }, 1000);
});

paperElement.addEventListener('click', () => {
    roundResult.innerHTML = '';
    removeClasses();
    const timeOut = setTimeout(() => {
        mainImage.classList.add('paper');
        roundResult.innerHTML = '';
        playerSelection = gameOptions[3];
        computerSelection = computerPlay();
        if (computerSelection === 'paper') {
            mainImage2.classList.add('paper');
            roundResult.innerHTML = STATE_DRAW;
        }
        if (computerSelection === 'scissors') {
            mainImage2.classList.add('scissors');
            roundResult.innerHTML = STATE_LOSE;
            computerScore.innerHTML = +computerScore.innerHTML + 1;
        }
        if (computerSelection === 'rock') {
            mainImage2.classList.add('rock');
            roundResult.innerHTML = STATE_WIN;
            playerScore.innerHTML = +playerScore.innerHTML + 1;
        }
        if (computerScore.innerHTML === '5' || playerScore.innerHTML === '5') {
            windowMessage.style.display = 'block';
            finalScore.innerHTML = `You ${playerScore.innerHTML} - ${computerScore.innerHTML} Computer `;
            console.log('hi');
        }
    }, 1000);
});
scissorsElement.addEventListener('click', () => {
    roundResult.innerHTML = '';
    removeClasses();
    const timeOut = setTimeout(() => {
        mainImage.classList.add('scissors');
        roundResult.innerHTML = '';
        playerSelection = gameOptions[1];
        computerSelection = computerPlay();

        if (computerSelection === 'scissors') {
            mainImage2.classList.add('scissors');
            roundResult.innerHTML = STATE_DRAW;
        }
        if (computerSelection === 'rock') {
            mainImage2.classList.add('rock');
            roundResult.innerHTML = STATE_LOSE;
            computerScore.innerHTML = +computerScore.innerHTML + 1;
        }
        if (computerSelection === 'paper') {
            mainImage2.classList.add('paper');
            roundResult.innerHTML = STATE_WIN;
            playerScore.innerHTML = +playerScore.innerHTML + 1;
        }
        if (computerScore.innerHTML === '5' || playerScore.innerHTML === '5') {
            windowMessage.style.display = 'block';
            finalScore.innerHTML = `You ${playerScore.innerHTML} - ${computerScore.innerHTML} Computer `;
            console.log('hi');
        }
    }, 1000);
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
