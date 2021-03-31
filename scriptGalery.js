$(document).ready(function () {
  //Création du bouton mosaique et changement de class liée au css mosaique en cas de  clic sur bouton
  $("<button id='mosaic'>Mosaic</button>").appendTo(".btn");
  let mosaicbtn = document.querySelector("#mosaic");
  mosaicbtn.addEventListener("click", (event) => {
    $("#imgClass").removeClass("imgGalerie");
    $("#imgClass").addClass("imgsGalerie");
  });
  //Création du bouton colonne et changement de class liée au css colonne en cas de clic sur bouton
  $("<button id='column'>Column</button>").appendTo(".btn");
  let columnbtn = document.querySelector("#column");
  columnbtn.addEventListener("click", (event) => {
    $("#imgClass").removeClass("imgsGalerie");
    $("#imgClass").addClass("imgGalerie");
  });

  //Création de la fonction du formulaire d'ajout d'image
  function form() {
    $(
      "<div class='form'><form id='form'><div><label for='url'>URL de l'image</label><input type='text'\
      name='url' id='url' required></div><button type='button' value='Envoyer' id='submit'>Envoyer</button></form></div>"
    ).appendTo(".formbtn");
  }

  //Création du bouton pour appeller le formulaire
  $("<button id='btn'><p>Ajouter une image</p></button>").appendTo(".formbtn");
  let formbtn = document.querySelector("#btn");

  //Définition de la fonction pour supprimer le formulaire
  function deleteForm() {
    $("main .formbtn .form").remove();
  }

  function deleteImage(currentEl){
    currentEl.parentElement.remove();
    }

  //Appel des fonctions suppression du formulaire et création du formulaire en cas de clic sur le bouton form
  formbtn.addEventListener("click", (event) => {
    deleteForm();
    form();
    $("#submit").click(function () {
      let data = $("#url").val();
      $(
        "<div class='imgdiv imgGalerie galadd'><button class='dlt' onclick='deleteImage(this)'>Delete</button>'<img src='" +
          data +
          "'></div>"
      ).appendTo(".galadd");
      console.log(data[0]);
      /*let dlt = document.querySelector(".dlt");
      dlt.addEventListener("click", (event) => {
        console.log($(this));
        console.log(event);
        event.target.parentElement.remove();
      });*/
    });
  });


});
