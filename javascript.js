
let userCount = 0;
let computerCount = 0;

function game(){
  

    for (let index = 1; index < 6; index++) {

      console.log('Round' + ' ' + index + '/' + '5');

    function playRound() {

      function getUserChoice(choice) {
        if (choice === 'rock' || choice === 'paper' || choice === 'scissors') {
          return choice;
        } else {
          return 'Wrong input';
        }
      }

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
      const userChoice = getUserChoice(prompt('Rock, paper or scissors?'));
      const computerChoice = getComputerChoice();
      let userWin = 'You won! Paper beats rock!';
      let computerWin = 'You lost! Rock beats scissors!';

    
        console.log('The user choice was: ' + userChoice);
        console.log('The computer choice was: ' + computerChoice);

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

