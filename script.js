$(document).ready(function(){

    $("<section class=articles> </section>").appendTo("main")
    $.getJSON("https://www.cheapshark.com/api/1.0/deals?&upperPrice=10")
.done(function(response){
    let data = response;
    console.log(data)
    data.forEach(function(element){
        $("<article><a href='metacritic.com" + element.metacriticLink + "' target='_blank'><h2>" + element.title + 
        "</h2> <img src='https://picsum.photos/200' alt='" + element.title + "'s image'/> </a> <p>score Metacritic :" + element.metacriticScore + "</p></article>").appendTo("main section")
        console.log(element.title)
        console.log(element.metacriticLink)
    })

})




})







