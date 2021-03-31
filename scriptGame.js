$(document).ready(function () {

//--------------------Définition des fonctions du jeu--------------------------------------


  function getPlayerChoice(playerInput) {
    choices.forEach((element) => {
      if (element == playerInput) {
        console.log("le choix est valide");
        playerChoice = playerInput;
        return playerChoice;
      }
    });
  }

  function getComputerChoice() {
    compchoice = choices[Math.floor(Math.random() * 3)];
    return compchoice;
  }

  function findWinner(playerChoice, compchoice) {
    let result = "";

    if (playerChoice == "rock" && compchoice == "scissors") {
      console.log("Won");
      result = "Victoire";
    } else if (playerChoice == "scissors" && compchoice == "paper") {
      console.log("Won");
      result = "Victoire";
    } else if (playerChoice == "paper" && compchoice == "rock") {
      console.log("Won");
      result = "Victoire";
    } else if (playerChoice == compchoice) {
      console.log("Tied");
      result = "Egalité";
    } else if (playerChoice == "bomb") {
      console.log("Won");
      result = "Victore";
    } else {
      console.log("Lost");
      result = "Perdu";
    }
    return result;
  }

  function jeu() {
    console.log("exo-3");
    let playerInput = prompt(
      "Your choice (rock, paper, scissors ?)"
    ).toLowerCase();
    let playerChoice = "";
    let compchoice = "";

    getPlayerChoice(playerInput);
    compchoice = getComputerChoice();
    let result = findWinner(playerChoice, compchoice);

    if (result === "Victoire") {
      countPlayer = countPlayer + 1;
    } else if (result === "Perdu") {
      countComp = countComp + 1;
    }


    $("main").append(
      "<div class='result'><p>Vous avez choisi : " +
        playerChoice +
        "</p> </div>"
    );
    $("main").append(
      "<div class='result'><p>L'ordinateur a choisi : " +
        compchoice +
        "</p> </div>"
    );
    $("main").append(
      "<div class='result'><p>Résultat : " + result + "</p> </div>"
    );
    $("main").append(
      "<div class='result'><p>Points du joueur : " + countPlayer + "</p> </div>"
    );
    $("main").append(
      "<div class='result'><p>Points de l'ordinateur : " +
        countComp +
        "</p> </div>"
    );
  }

  //------------------------------ portée globale --------------------------------

  let choices = ["rock", "paper", "scissors", "bomb"];
  let countPlayer = 0;
  let countComp = 0;

  //Création du bouton replay et appel de la fonction jeu
  $("main").append("<button id='replay'>replay</button>");
  let replaybtn = document.querySelector("#replay");
  replaybtn.addEventListener("click", (event) => {
    $("main div").remove();
    $("button").remove;
    jeu();
  });

//Appel de la fonction jeu
  jeu();
});
