
let humanScore = 0;
let computerScore = 0;
const ROUNDS_COUNT = 5;

function getComputerChoice(){
  let choice = Math.floor(Math.random()*3);
  switch(choice){
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function getHumanChoice(){
  let choice = prompt("Choose a paper, a rock or a scissors!")
  choice ? choice.toLowerCase() : getHumanChoice();
  if (choice === "paper" || choice === "rock" || choice === "scissors"){
    return choice;
  }
  else{
    alert("That was not a Rock nor a Paper nor a Scissors! \n Try again!");
    getHumanChoice();
  }
  return choice;
}

function playRound(humanChoice, computerChoice){
  if(humanChoice === computerChoice){
    showChoices(humanChoice, computerChoice);
  }else if(humanChoice === "rock" && computerChoice === "paper"){
    computerScore++;
    showChoices(humanChoice, computerChoice);
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    computerScore++;
    showChoices(humanChoice, computerChoice);
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    computerScore++;
    showChoices(humanChoice, computerChoice);
  }else{
    humanScore++;
    showChoices(humanChoice, computerChoice);
  }
  console.log(humanScore);
  console.log(computerScore);
}

function showChoices(humanChoice, computerChoice){
  if (humanChoice === computerChoice) {
    alert(`It's a tie! \nHuman: \t${humanChoice} \nComputer: \t${computerChoice} ${showScore()}`);
  } else {
    alert(`Human: \t${humanChoice} \nComputer: \t${computerChoice} ${showScore()}`);
  }
}

function showScore(){
  return `\nScore:\t\tHuman: ${humanScore}\n\t\t\tComputer: ${computerScore}`;
}

function playGame(){
  for(let i = 0; i < ROUNDS_COUNT; i++){
    playRound(getHumanChoice(), getComputerChoice());
  }
  if(humanScore == computerScore){
    alert(`It's a tie! ${showScore()}`);
    return;
  }
  let winner = humanScore > computerScore ? "Human" : "Computer";
  alert(`${winner} wins! ${showScore()}`);
}

playGame();