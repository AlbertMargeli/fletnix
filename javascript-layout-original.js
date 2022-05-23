$(document).ready(function(){ /* inici JQUERY */

/* recopila JSON */

$.getJSON ("llista_original.php", function(pelis) {

    setTimeout(function() {
        $("#carregant").fadeOut();


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

        /* layout pel·lícules */

        $('main').append('<div class="movie"><h2 class="titol">'+pelis[n]["titol"]+'</h2><img class="portada" src="img/covers/'+pelis[n]["image"]+'.jpg"><h3 class="director">'+pelis[n]["director"]+'</h3><p class="dades"><span class="any">'+pelis[n]["any"]+'</span> / <span class="pais">'+pelis[n]["pais"]+'</span></p><a class="google" href="https://www.google.com/search?q='+pelis[n]["titol"]+' '+pelis[n]["director"]+' " target="_blank">Més info</a><div class="stars">'+mostrarEstrellas+'</div></div>');
    }

}, 10)

/* final JSON */
});

/* final JQUERY */ });



