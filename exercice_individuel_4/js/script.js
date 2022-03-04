/* Etape 1
Ecrivez une fonction "sapin", qui prend en entrée un nombre entier et qui affiche un sapin, avec la logique suivante :

sapin(1) affiche à l'écran :
  +
 /*\
/***\

sapin(2) affiche à l'écran :

   +
  /*\
 /***\
/*****\

sapin(5) affiche à l'écran :
      +
     /*\
    /***\
   /*****\
  /*******\
 /*********\
/***********\ */

let spacesBefore = "";
let space = " ";
const hautSapin = ["  +", " /*\\ "]


function sapin(number) {
  console.log("La taille demandée est : " + number);
  let leafsBase = "***";
  let addBranch = "**";
  if (number == 0) {
    sapinBase(number);
  }
  else {
    sapinBase(number);// exemple : Si number = 3
    for (let i = 0 ; i < number; i++) {
      spacesBefore = space.repeat(number - (i +1)); //number = 3 et i = 1 à la première boucle. soit spaceBefore = space * 1
      console.log(spacesBefore + "/" + leafsBase + addBranch.repeat(i) + "\\")
      //Si number = 3 (" " + "/" + "***" + ("**") + "\")  à la première boucle
      //Si number = 3 ("" + "/" + "***" + ("**" + "**") + "\")  à la deuxième boucle
    }
  }
}

function sapinBase(height) {
  if (height == 0){
    for (s = 0; s < hautSapin.length; s++)
      console.log(hautSapin[s]);
  } else {
      spacesBefore = space.repeat(height - 1);// h = 3 à la première boucle. soit spaceBefore = space
      //console.log(spacesBefore)
    for (s = 0; s < hautSapin.length; s++)
      console.log(spacesBefore + hautSapin[s]); //
  }
}
sapin(0)
sapin(1)
sapin(2)
sapin(3)
sapin(4)
sapin(5)
sapin(6)
/* */
