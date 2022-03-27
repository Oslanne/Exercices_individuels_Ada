//Step 1 :

function getASecretCode() {
  let colorPalet = ['BLUE', 'GREEN', 'RED', 'YELLOW', 'WHITE', 'BLACK', 'ORANGE', 'VIOLET']
  let secretCode = [];
  while (secretCode.length < 4) {
    secretCode.push(colorPalet[Math.floor(Math.random() * colorPalet.length)])
  }
  console.log(secretCode)
  return secretCode;
}

function getScore(secretCode, playerAnswer) {
  //Work in progress
  score = [0,0]
  return score
}

function checkCode(secretCode, playerAnswer) {
  // this function permit to compare two array and return true or false.
  let hasGoodCombinaison = false;

  if (JSON.stringify(secretCode) === JSON.stringify(playerAnswer)) {
    hasGoodCombinaison = true;
    return hasGoodCombinaison;
  } else {
    score = getScore(secretCode, playerAnswer)
    return score;
  }
}

function askPlayerCode(secretCode) {
  let playerAnswer = [];
  const possibleColor = ['BLUE', 'GREEN', 'RED', 'YELLOW', 'WHITE', 'BLACK', 'ORANGE', 'VIOLET']
  while (playerAnswer.length < 4) {
    //Ask player 2 colors
    let playerColor = prompt("Choose a color : Blue, green, red, Yellow, \n white, black, orange or violet.").toUpperCase()
    //console.log(playerAnswer)
    if (possibleColor.includes(playerColor)) {// == "BLUE" || playerColor == "GREEN" || playerColor == "RED" || playerColor == "YELLOW"){
      playerAnswer.push(playerColor);
      console.log(playerAnswer)
    } else {
      alert('wrong color ❌, please try again');
    }
  }
  return checkCode(secretCode, playerAnswer);
}

function gamePlay() {
  //initializeCode();
  const secretCode = getASecretCode();
  console.log(secretCode); // Declare the secret code
  const totalTurn = 12;
  let gamePlayTimer = 0;
  let verifyCode = false;
  //function to ask player combinaison
  while (verifyCode == false ) {
    if (gamePlayTimer != totalTurn) {
      verifyCode = askPlayerCode(secretCode);
      console.log(verifyCode)
      gamePlayTimer++
      if (verifyCode != true) {
        alert("Try Again !")
      }
      //console.log(gamePlayTimer)
    } else {
      break
    }
  }
  if (verifyCode == true) {
    alert("Well Play ! 🔥");
  } else {
    alert("Game Over 😢")
  }
}

gamePlay()
