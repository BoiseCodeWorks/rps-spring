// function startGame(pChoice) {
//   //computer to chose a random rps
//   var cChoice = makeCompChoice()
//   //compare the choices to determine winner
//   if (pChoice == cChoice) {
//     drawResults(pChoice, cChoice, "tie");
//   } else if (pChoice == "rock") {
//     if (cChoice == "scissors") {
//       drawResults(pChoice, cChoice, "Player Win!");
//     } else {
//       drawResults(pChoice, cChoice, "Player Lose!");
//     }
//   } else if (pChoice == "paper") {
//     if (cChoice == "rock") {
//       drawResults(pChoice, cChoice, "Player Win!");
//     } else {
//       drawResults(pChoice, cChoice, "Player Lose!");
//     }
//   } else {
//     if (cChoice == "paper") {
//       drawResults(pChoice, cChoice, "Player Win!");
//     } else {
//       drawResults(pChoice, cChoice, "Player lose!");
//     }
//   }
// }

var choices = ["rock", "paper", "scissors", "spock", "lizard"];

function makeCompChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

var win = {
  rock: ["scissors","lizard"],
  paper: ["rock","spock"],
  scissors: ["paper", "lizard"],
  lizard: ["spock", "paper"],
  spock: ["rock", "scissors"]
};

function startGame(pChoice){
  var cChoice = makeCompChoice()
  var result = ''
  if(pChoice == cChoice){
    result = "tie"
  }
  else if( win[pChoice].includes(cChoice)){
    result = "player win"
  }
  else{
    result = "computer win"
  }
  drawResults(pChoice, cChoice, result)
}

function drawResults(pc, cc, res) {
  //player choice vs compChoice
  document.getElementById(
    "choices"
  ).innerText = `Player: ${pc} vs. Computer: ${cc}`;
  //result
  document.getElementById(
    "results"
  ).innerText = `AND THE RESULTS....... ${res}`;
}
