$(document).ready(function(){ /* inici JQUERY */

/* recopila JSON */

$.getJSON ("llista_original.php", function(pelis) {

    setTimeout(function() {$("#carregant").fadeOut();}, 100)


    estrellaOn = '<img src="img/stars/star_on.png">';
    estrellaHalf = '<img src="img/stars/star_half.png">';
    estrellaOff = '<img src="img/stars/star_off.png">';

    /* main loop */
    
    for (n=0; n<pelis.length; n++) { 

        /* calcular estrellas */

        puntuacioEntero = parseInt((pelis[n]["puntuacio"])/2);
        puntuacioResto = (pelis[n]["puntuacio"])%2;
        menosQueCinco = 5-puntuacioEntero;
        mostrarEstrellas = "";

        if(puntuacioResto==0) {
            for(z=0; z<puntuacioEntero; z++) {
                mostrarEstrellas = mostrarEstrellas + estrellaOn;}
            for(y=0; y<menosQueCinco; y++) {mostrarEstrellas = mostrarEstrellas+estrellaOff;}}
            
            else {
                for(z=0; z<puntuacioEntero; z++) {
                    mostrarEstrellas = mostrarEstrellas + estrellaOn;}
                mostrarEstrellas = mostrarEstrellas + estrellaHalf;
                for(y=1; y<menosQueCinco; y++) {mostrarEstrellas = mostrarEstrellas+estrellaOff;}}

        imprimir = '<li class="splide__slide movie"><div class="movie-back"><h2 class="titol">'+pelis[n]["titol"]+'</h2><img class="portada" src="img/covers/'+pelis[n]["image"]+'.jpg"><h3 class="director">'+pelis[n]["director"]+'</h3><p class="dades"><span class="any">'+pelis[n]["any"]+'</span> / <span class="pais">'+pelis[n]["pais"]+'</span></p><a class="google" href="https://www.google.com/search?q='+pelis[n]["titol"]+' '+pelis[n]["director"]+' " target="_blank">Més info</a><div class="stars">'+mostrarEstrellas+'</div><div></li>'

        if(pelis[n]["any"]>1999) {$('#splide__list_sxxi').append(imprimir);}
            else if(pelis[n]["any"]<1980) {$('#splide__list_classic').append(imprimir);}       
                else {$('#splide__list_fin-milenio').append(imprimir);}

        
        if(pelis[n]["dona"]==1) {$('#splide__list_she').append(imprimir);}
        
        if(pelis[n]["comedia"]==1) {$('#splide__list_comedia').append(imprimir);}

        if(pelis[n]["pais"]!="USA" && pelis[n]["pais"]!="UK") {$('#splide__list_no-english').append(imprimir);}


        /* layout pel·lícules */

        

        
    }

    var elms = document.getElementsByClassName( 'splide' );
    for ( var i = 0; i < elms.length; i++ ) {
    new Splide( elms[ i ], {type: 'loop', perPage: 6}).mount();
}


/* final JSON */
});

$("#link-sxxi").click(function()
{   
    $("section").removeClass("order01");
    $("section").addClass("order02");
    $("#sxxi").removeClass("order02");
    $("#sxxi").addClass("order01");
    window.scrollTo(0, 0);
});

$("#link-fin-milenio").click(function()
{   
    $("section").removeClass("order01");
    $("section").addClass("order02");
    $("#fin-milenio").removeClass("order02");
    $("#fin-milenio").addClass("order01");
    window.scrollTo(0, 0);
});

$("#link-classic").click(function()
{   
    $("section").removeClass("order01");
    $("section").addClass("order02");
    $("#classic").removeClass("order02");
    $("#classic").addClass("order01");
    window.scrollTo(0, 0);
});

$("#link-she").click(function()
{   
    $("section").removeClass("order01");
    $("section").addClass("order02");
    $("#she").removeClass("order02");
    $("#she").addClass("order01");
    window.scrollTo(0, 0);
});

$("#link-comedia").click(function()
{   
    $("section").removeClass("order01");
    $("section").addClass("order02");
    $("#comedia").removeClass("order02");
    $("#comedia").addClass("order01");
    window.scrollTo(0, 0);
});

$("#link-no-english").click(function()
{   
    $("section").removeClass("order01");
    $("section").addClass("order02");
    $("#no-english").removeClass("order02");
    $("#no-english").addClass("order01");
    window.scrollTo(0, 0);
});



/* final JQUERY */ });



