// Declaro dos variables 0 para luego acumular resultados

let userCount = 0;
let computerCount = 0;
let userChoice = '';
    
// Traigo los valores del html (botones), los guardo en variables y espero el click en alguno.

const rock = document.querySelector('.rockButton');
rock.addEventListener('click', e => {
  userChoice = 'rock';
  playRound();
});
const paper = document.querySelector('.paperButton');
paper.addEventListener('click', e => {
  userChoice = 'paper';
  playRound();
});
const scissors = document.querySelector('.scissButton');
scissors.addEventListener('click', e => {
  userChoice = 'scissors';
  playRound();
});

// Funcion que juega una ronda

function playRound() {
        
// Funcion que genera un valor aleatorio para la eleccion de la computadora

      function getComputerChoice() {
        let number = Math.floor(Math.random() * 3);
        if (number === 0) {
          return 'rock';
        } else if (number === 1) {
          return 'paper';
        } else {
          return 'scissors';
        }
      }

// Almaceno la eleccion de la pc en una variable.
// Creo otras dos variables para almacenar los strings de los resultados, para luego poder usarlos en el contador de rondas ganadas por cada uno.

      let computerChoice = getComputerChoice();
      let userWin = 'You won! ' + userChoice + ' beats ' + computerChoice + '!';
      let computerWin = 'You lost! ' + computerChoice + 'beats ' + userChoice + '!';

    
        console.log('The user choice was: ' + userChoice);
        console.log('The computer choice was: ' + computerChoice);

// Funcion que compara ambos valores y retorna la variable creada anteriormente dependiendo quien gana.       

      function match() {
      if (userChoice === computerChoice) {
        return 'Tied!';
      } else if (userChoice === 'rock' && computerChoice === 'paper') {
        return computerWin;
      } else if (userChoice === 'rock' && computerChoice === 'scissors') {
        return userWin;
      } else if (userChoice === 'paper' && computerChoice === 'rock') {
        return userWin;
      } else if (userChoice === 'paper' && computerChoice === 'scissors') {
        return computerWin;
      } else if (userChoice === 'scissors' && computerChoice === 'rock') {
        return computerWin;
      } else {return userWin; }
    }

    console.log(match());

// Sumador de rondas ganadas para quien corresponda usando las variables del comienzo.

    if(match() == computerWin){
      computerCount++;
    } else if (match() == userWin) {
      userCount++;
    }

// Muestro los resultados en pantalla

    let userScore = document.getElementById('userScore');
    let opponentScore = document.getElementById('opponentScore');
    userScore.textContent = userCount;
    opponentScore.textContent = computerCount;

    }


 


  