let numberOfMatches = 50; // We define an initial value to start game

function removeMatch(number) {

  numberOfMatches -= number;
  console.log(numberOfMatches);
}

function askPlayer(player) {
  let number = parseInt(prompt(`Hi ${player}, Please remove between 1-6 matches`));
  return number
}

function checkNumber(number) {
  if (number >= 1 && number <= 6) {
    return true
  } else {
    return false
  }
}

function gamePlay(playersList) {
  console.log(playersList)
  let newNumber
  for (const player in playersList) {
    if ( newNumber > 45  ) { 
      break }
    let currentPLayer = playersList[player]
    do {
      let number = askPlayer(currentPLayer)
      checkNumber(number)
        while (checkNumber(number) !== true) {
          number = askPlayer(currentPLayer)
        }
        newNumber = removeMatch(number)
      } while (numberOfMatches > 0)
    console.log(`${currentPLayer} You win`);        
  }
}

//Boucle 
//vérifier s'il y a des allumettes, (If )
//Demande de chiffre au premier joueur
// si chiffre ok, on retire le numbre d'allumettre
// vérifier si la partie est finie ? 
// => Si oui : EndGame
// => Si non : Fonction changePlayer

function howManyPlayer() {
  playerNumber = parseInt(prompt("How many player(s) are you ?"))
  // En fonction du nombre de joueurs, leur demander leur nom.
  playersList = [];
  // Mettre le liste des joeurs dans l'array playerList.
  for (let i = 0; i < playerNumber; i++) {
    playersList.push(prompt("Add your name"))
  }
  gamePlay(playersList)
  console.log(playersList)
}
howManyPlayer()
//AskNumber()
