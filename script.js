$(document).ready(function () {
  //Définition de la fonction récupérant les données API et populant le HTML
  
  function loadfeed() {
    $("<section class=articles> </section>").appendTo("main");
    $.getJSON("https://www.cheapshark.com/api/1.0/deals?&upperPrice=10").done(
      function (response) {
        let data = response;
        //console.log(data)
        data.forEach(function (element) {
          $(
            "<article><a href='metacritic.com" +
              element.metacriticLink +
              "' target='_blank'><h2>" +
              element.title +
              "</h2> <img src='https://media.senscritique.com/media/000017816725/source_big/Crash_Bandicoot.png' widht='200' height='200' alt='" +
              element.title +
              "'s image'/> </a> <p>score Metacritic :" +
              element.metacriticScore +
              "</p></article>"
          ).appendTo("main section");
        });
      }
    );
  }
//Appel de la fonction pour populer le feed
  loadfeed();

//Définition de la fonction pour supprimer le feed
  function dltBeforeReload() {
    $("main section").remove();
  }

  //Définition de la fonction créant le formulaire d'ajout d'articles
  function form (){
  $("<div class='form'><form id='form'><div><label for='name'>Nom du jeu </label><input type='text'\
    name='name' id='name' required></div><div><label for='note'>Note ( entre 0 et 100 ):</label><input type='number'\
     id='note' name='quantity' min='0' max='100'></div>\
     <button type='button' value='Envoyer' id='submit'>Envoyer</button></form></div>").appendTo(".formbtn")
  }

//Définition de la fonction pour supprimer le formulaire
function deleteForm(){
  $("main .formbtn .form").remove();
}

//Création du bouton pour appeller le formulaire 
$("<button id='rld'><p>Ajouter une review</p></button>").appendTo(".formbtn")
let formbtn = document.querySelector("#rld");
  
//Appel des fonctions suppression du formulaire et création du formulaire en cas de clic sur le bouton form
formbtn.addEventListener("click", (event) => {
    deleteForm();
    form();
    $('#submit').click(function(){
      let data = [$('#name').val(), $('#note').val()]
      console.log(data)
        $(
          "<article><a><h2>" +
            data[0] +
            "</h2> <img src='https://media.senscritique.com/media/000017816725/source_big/Crash_Bandicoot.png' widht='200' height='200' alt='" +
            data[0] +
            "'s image'/> </a> <p>score Metacritic :" +
            data[1] +
            "</p></article>"
        ).appendTo("main section");
        console.log(data[0])
      ;

    })
  })
//Création du bouton pour appeler le reload
  $(".rld").prepend(
    "<button><p>Recharger</p></button>"
  );

  //Appel des fonctions delete feed et chargement du feed en cas de clic sur bouton reload
  let button = document.querySelector(".rld");
  button.addEventListener("click", (event) => {
    dltBeforeReload();
    loadfeed();
  });


});
