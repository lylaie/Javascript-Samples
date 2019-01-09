//CONSTANTES
var user_score = 0;
var computer_score = 0;

const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score');
const result_div = document.querySelector('.result');

const rock_div = document.getElementById('rock');
const scissors_div = document.getElementById('scissors');
const paper_div = document.getElementById('paper');


// -- --- -- -- FUNCTIONS -- -- -- -- --- --

/*
 ** Function to get the Computer Choice
 **
*/

function getComputerChoice(){
  const choices = [ 'rock', 'paper', 'scissors'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

/*
 ** Function who capitalize word choice
 **
*/

function capitalize(word){
  if (word === 'rock') return 'Rock';
  if (word === 'scissors') return 'Scissors';
  if (word === 'paper') return 'Paper';
}

/*
 ** Function who manage when the user win
 **
*/

function win(user, computer){
  user_score += 1;
  userScore_span.innerHTML = user_score;
  computerScore_span.innerHTML = computer_score;
  result_div.innerHTML = capitalize(user) + " beats " + capitalize(computer) + '. You win!';
  document.getElementById(user).classList.add('green-glow');
  setTimeout(function() {
    document.getElementById(user).classList.remove('green-glow')
  }, 1000)
}

/*
 ** Fnction who manage when the user loose
 **
*/

function loose(user, computer){
  computer_score += 1;
  userScore_span.innerHTML = user_score;
  computerScore_span.innerHTML = computer_score;
  result_div.innerHTML = capitalize(computer) + " beats " + capitalize(user) + '. You loose!';
  document.getElementById(user).classList.add('red-glow');
  setTimeout(function() {
    document.getElementById(user).classList.remove('red-glow')
  }, 1000)
}

/*
 ** Function who manage when nobody wins.
 **
*/

function draw(user, computer){
  userScore_span.innerHTML = user_score;
  computerScore_span.innerHTML = computer_score;
  result_div.innerHTML = 'Draw. Try again.'
  document.getElementById(user).classList.add('gray-glow');
  setTimeout(function() {
    document.getElementById(user).classList.remove('gray-glow')
  }, 1000)
}

/*
 ** Function to selection the userChoice
 **
*/

function play(userChoice){
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice){
    case ('rockrock'):
      draw(userChoice, computerChoice);
      break;
    case ('rockpaper'):
      loose(userChoice, computerChoice);
      break;
    case ('rockscissors'):
      win(userChoice, computerChoice);
      break;
    case ('paperrock'):
      win(userChoice, computerChoice);
      break;
    case ('paperpaper'):
      draw(userChoice, computerChoice);
      break;
    case ('paperscissors'):
      loose(userChoice, computerChoice);
      break;
    case ('scissorsrock'):
      loose(userChoice, computerChoice);
      break;
    case ('scissorspaper'):
      win(userChoice, computerChoice);
      break;
    case ('scissorsscissors'):
      draw(userChoice, computerChoice);
      break;
  }
}

/*
 ** function who manage the clicked choice
 **
*/

function main(){
  rock_div.addEventListener('click', function(){
    play('rock');
  });

  paper_div.addEventListener('click', function(){
    play('paper');
  });

  scissors_div.addEventListener('click', function(){
    play('scissors');
  });

}

main();
