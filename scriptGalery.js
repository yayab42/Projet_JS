$("main").prepend("<button id='mosaic'>Mosaic</button>")
let mosaicbtn = document.querySelector("#mosaic");
  mosaicbtn.addEventListener("click", (event) => {
    $("main div").removeClass()
    $("main div").addClass("imgsGalerie")
    
  })

  $("main").prepend("<button id='column'>Column</button>")
let columnbtn = document.querySelector("#column");
  columnbtn.addEventListener("click", (event) => {
    $("main div").removeClass()
    $("main div").addClass("imgGalerie")
    
  })