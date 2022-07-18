function playRound(getUserChoice, getComputerChoice) {
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
  
      console.log('The user choice was: ' + userChoice);
      console.log('The computer choice was: ' + computerChoice);
  
    if (userChoice === computerChoice) {
      return 'Tied!';
    } else if (userChoice === 'rock' && computerChoice === 'paper') {
      return 'You lost! Paper beats rock!';
    } else if (userChoice === 'rock' && computerChoice === 'scissors') {
      return 'You won! Rock beats scissors!';
    } else if (userChoice === 'paper' && computerChoice === 'rock') {
      return 'You won! Paper beats rock!';
    } else if (userChoice === 'paper' && computerChoice === 'scissors') {
      return 'You lost! Scissors beats paper!';
    } else if (userChoice === 'scissors' && computerChoice === 'rock') {
      return 'You lost! Rock beats scissors!';
    } else return 'You won! Scissors beats paper!';
  }
  
  console.log(playRound());