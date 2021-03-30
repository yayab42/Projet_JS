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