const latinToMorse = {
  'A': '.-',
  'B': '-...',
  'C': '-.-.',
  'D': '-..',
  'E': '.',
  'F': '..-.',
  'G': '--.',
  'H': '....',
  'I': '..',
  'J': '.---',
  'K': '-.-',
  'L': '.-..',
  'M': '--',
  'N': '-.',
  'O': '---',
  'P': '.--.',
  'Q': '--.-',
  'R': '.-.',
  'S': '...',
  'T': '-',
  'U': '..-',
  'V': '...-',
  'W': '.--',
  'X': '-..-',
  'Y': '-.--',
  'Z': '--..'
}

const morseToLatin = {
  '-': "T",
  '--': "M",
  '---': "O",
  '--.': "G",
  '--.-': "Q",
  '--..': "Z",
  '-.': "N",
  '-.-': "K",
  '-.--': "Y",
  '-.-.': "C",
  '-..': "D",
  '-..-': "X",
  '-...': "B",
  '.': "E",
  '.-': "A",
  '.--': "W",
  '.---': "J",
  '.--.': "P",
  '.-.': "R",
  '.-..': "L",
  '..': "I",
  '..-': "U",
  '..-.': "F",
  '...': "S",
  '...-': "V",
  '....': "H"
}

// Étape 1
// Dans un fichier JavaScript, commencez par écrire une fonction getLatinCharacterList.
// Cette fonction va prendre en paramètre du texte et retourner un tableau contenant chaque caractère.
// Tester la fonction en lui donnant une chaine de caractères “Hello, world”,
// et assurez - vous qu’elle renvoie bien["H", "e", "l", "l", "o", ",", " ", "w", "o", "r", "l", "d"]


function getLatinCharacterList(text) {
  // On met le texte en paramètre en majuscule et transforme le string en array avec pour chacun character un index.
  arrayTransform = text.toUpperCase().split('');
  return arrayTransform;
}
//getLatinCharacterList("Hello, world");

// Étape 2
// À votre fichier, ajouter le dictionnaire en annexe 1.
// Il vous permettra d’établir une table de correspondance entre les caractères alphabets latin et l’alphabet morse.
// Créer une fonction translateLatinCharacter qui prend un paramètre un caractère et renvoie sa correspondance en morse.
// Tester la fonction en lui donnant en paramètre “A”, et assurez - vous qu’elle renvoie bien.-.


function translateLatinCharacter(letter) {
  for (const latineLetter in latinToMorse) {
    if (letter == latineLetter) {
      //console.log(latinToMorse[latineLetter]);
      return (latinToMorse[latineLetter]) + " ";
    } else if (letter == " ") {
      //console.log(letter)
      return "/ "
    }
  }
}
//translateLatinCharacter("H");

// Étape 3
// Ajouter une nouvelle fonction encode qui prend en paramètre du texte et qui va utiliser la fonction de l’étape 1,
// pour chaque caractère, appliquer la fonction de l’étape 2 et ainsi récupérer son équivalent morse.
// Attention: la table de correspondance ne contient que des caractères majuscules.

function encode(textToTrad) {
  let textTranslate = [];
  let arrayCharacters = getLatinCharacterList(textToTrad);
  // console.log(arrayCharacters);
  for (const character in arrayCharacters) {
      textTranslate += translateLatinCharacter(arrayCharacters[character]);
  }
  alert(textTranslate);
  console.log(textTranslate);
}

//encode("Hello world")

// Étape 4
// Vous trouverez en annexe 2 le dictionnaire de correspondance inversé.
// Ajoutez-le à votre code, et appliquez les procédés similaire à ce qui a été fait
// pour le encode pour créer une fonction decode. Dans cet exercice, on admettra que les lettres
// en morse sont séparées par un espace, et les mots par des “/” (slash).

// Ainsi, créer la fonction getMorseCharacterList ainsi que translateMorseCharacter.

function getMorseCharacterList(morse) {
  //console.log(morse);
  arrayMorseTransform = morse.split(" ");
  //console.log(arrayMorseTransform);
  return arrayMorseTransform;
}

function translateMorseCharacter(morse) {
  for (const morseLetter in morseToLatin) {
    if (morse == morseLetter) {
      //console.log(morseToLatin[morseLetter]);
      return (morseToLatin[morseLetter]);
    } else if (morse == "/") {
      //console.log(" ")
      return " "
    }
  }
}

function decode(morseToTrad) {
  let morseTranslate = [];
  let morseArrayCharacters = getMorseCharacterList(morseToTrad);
  //console.log(morseArrayCharacters);
  for (const morseCharacter in morseArrayCharacters) {
    morseTranslate += translateMorseCharacter(morseArrayCharacters[morseCharacter]);
  }
  console.log(morseTranslate);
}

//decode(".... . .-.. .-.. --- / .-- --- .-. .-.. -..");

//Fonction pour récupérer le texte entrer dans le html.

function userRequest() {
  let stringToTranslate = document.getElementById("translate").value;
  //console.log(stringToTranslate);
  encode(stringToTranslate)
}
