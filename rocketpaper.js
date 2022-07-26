// Declaro dos variables 0 para luego acumular resultados

let userCount = 0;
let computerCount = 0;



// Funcion que tiene un ciclo que limita la cantidad de rondas

function game(){
  

    for (let index = 1; index < 6; index++) {

      console.log('Round' + ' ' + index + '/' + '5');

// Funcion que contiene el juego de una ronda

    function playRound() {

// Funcion que recibe la choice ingresada por el usuario a traves del prompt y valida el dato

      function getUserChoice(choice) {
        if (choice === 'rock' || choice === 'paper' || choice === 'scissors') {
          return choice;
        } else {
          return 'Wrong input';
        }
      }

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

// Creo dos variables para almacenar los resultados de las funciones anteriores, tanto del ingreso del usuario como el random de la pc. 
// Creo otras dos variables para almacenar los strings de los resultados, para luego poder usarlos en el contador de rondas ganadas por cada uno.


      const userChoice = getUserChoice(prompt('Rock, paper or scissors?'));
      const computerChoice = getComputerChoice();
      let userWin = 'You won! Paper beats rock!';
      let computerWin = 'You lost! Rock beats scissors!';

    
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

    console.log('User points:' + ' ' + userCount);
    console.log('Computer points:' + ' ' + computerCount);

    }

    console.log(playRound())
  }
}

    console.log(game());



  