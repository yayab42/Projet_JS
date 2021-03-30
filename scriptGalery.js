$(document).ready(function(){
//Création du bouton mosaique et changement de class liée au css mosaique en cas de  clic sur bouton
$("main").prepend("<button id='mosaic'>Mosaic</button>")
let mosaicbtn = document.querySelector("#mosaic");
  mosaicbtn.addEventListener("click", (event) => {
    $("main div").removeClass()
    $("main div").addClass("imgsGalerie")
    
  })
//Création du bouton colonne et changement de class liée au css colonne en cas de clic sur bouton
  $("main").prepend("<button id='column'>Column</button>")
let columnbtn = document.querySelector("#column");
  columnbtn.addEventListener("click", (event) => {
    $("main div").removeClass()
    $("main div").addClass("imgGalerie")
    
  })

//Création de la fonction du formulaire d'ajout d'image
function form (){
    $("<div class='form'><form id='form'><div><label for='url'>URL de l'image</label><input type='text'\
      name='url' id='url' required></div><button type='button' value='Envoyer' id='submit'>Envoyer</button></form></div>").appendTo(".formbtn")
}

//Création du bouton pour appeller le formulaire 
$("<button id='btn'><p>Ajouter une image</p></button>").appendTo(".formbtn")
let formbtn = document.querySelector("#btn");

//Définition de la fonction pour supprimer le formulaire
function deleteForm(){
    $("main .formbtn .form").remove();
  }


//Appel des fonctions suppression du formulaire et création du formulaire en cas de clic sur le bouton form
formbtn.addEventListener("click", (event) => {
    deleteForm();
    form();
    $('#submit').click(function(){
      let data = $('#url').val();
        $("<img src='"+ data+ "'>").appendTo(".galadd");
        console.log(data[0])
      ;

    })
  })


})