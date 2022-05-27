$(document).ready(function(){ /* inici JQUERY */

/* recopila JSON */

$.getJSON ("llista_original.php", function(pelis) {

    setTimeout(function() {$("#carregant").fadeOut();}, 1000)


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

        imprimir = '<li class="splide__slide movie"><div class="movie-back"><h2 class="titol">'+pelis[n]["titol"]+'</h2><img class="portada" src="img/covers/'+pelis[n]["image"]+'.jpg"><h3 class="director">'+pelis[n]["director"]+'</h3><p class="dades"><span class="any">'+pelis[n]["any"]+'</span> / <span class="pais">'+pelis[n]["pais"]+'</span></p><a class="google" href="https://www.google.com/search?q='+pelis[n]["titol"]+' '+pelis[n]["director"]+' " target="_blank">Més info</a><div class="stars">'+mostrarEstrellas+'</div><a href="eliminar_pellicula.php?id='+pelis[n]["id"]+'" class="eliminar">Elimina pel·lícula</a><div></li>'

        if(pelis[n]["any"]>1999) {$('#splide__list_sxxi').append(imprimir);}
            else if(pelis[n]["any"]<1980) {$('#splide__list_classic').append(imprimir);}       
                else {$('#splide__list_fin-milenio').append(imprimir);}

        
        if(pelis[n]["dona"]==1) {$('#splide__list_she').append(imprimir);}
        
        if(pelis[n]["comedia"]==1) {$('#splide__list_comedia').append(imprimir);}

        if(pelis[n]["pais"]!="USA" && pelis[n]["pais"]!="UK") {$('#splide__list_no-english').append(imprimir);}
             
    }

    /* montar sliders */
       
    var dispositivesResponsive = window.matchMedia('(min-device-width: 768px)');

    if(dispositivesResponsive.matches) {
        
        var elms = document.getElementsByClassName( 'splide' );
        for ( var i = 0; i < elms.length; i++ ) {

            if(i==0) {new Splide( elms[ i ], {type: 'loop', perPage: 1, pagination: false, autoplay: true}).mount();}
            else {new Splide( elms[ i ], {type: 'loop', perPage: 6}).mount();}}}
        
    else {

        var elms = document.getElementsByClassName( 'splide' );
        for ( var i = 0; i < elms.length; i++ ) {
        new Splide( elms[ i ], {type: 'loop', perPage: 2, arrows: false}).mount();}};


/* final JSON */
});

/* AFEGIR PELÍCULES */

$("#afegeix").click(function()
{
    $(this).addClass("desplazar-afegeix");
    $("#formulari-container").removeClass("nodisplay");
    $("#formulari-container").addClass("show-formulari");
    $("#formulari-container-inner").addClass("moure-cap-amunt");

})


$("#tancar-formulari").click(function()
{
    $("#formulari-container").addClass("amaga-formulari");
    $("#afegeix").addClass("tornar-afegeix");
    $("label").removeClass("canviar-brillo");
    $(':input').removeAttr('placeholder');
    $("form").trigger("reset");
    setTimeout(function() {$("#formulari-container").addClass("nodisplay"); $("#formulari-container").removeClass("amaga-formulari"); $("#afegeix").removeClass("tornar-afegeix");$("#afegeix").removeClass("desplazar-afegeix");$(window).off('scroll');}, 1201)
    
})

/* MAIN MENU */

$("#link-sxxi").click(function()
{   
    $(".main-container").removeClass("order01");
    $(".main-container").addClass("order02");
    $("#sxxi").removeClass("order02");
    $("#sxxi").addClass("order01");
    window.scrollTo(0, 671);
});

$("#link-fin-milenio").click(function()
{   
    $(".main-container").removeClass("order01");
    $(".main-container").addClass("order02");
    $("#fin-milenio").removeClass("order02");
    $("#fin-milenio").addClass("order01");
    window.scrollTo(0, 671);
});

$("#link-classic").click(function()
{   
    $(".main-container").removeClass("order01");
    $(".main-container").addClass("order02");
    $("#classic").removeClass("order02");
    $("#classic").addClass("order01");
    window.scrollTo(0, 671);
});

$("#link-she").click(function()
{   
    $(".main-container").removeClass("order01");
    $(".main-container").addClass("order02");
    $("#she").removeClass("order02");
    $("#she").addClass("order01");
    window.scrollTo(0, 671);
});

$("#link-comedia").click(function()
{   
    $(".main-container").removeClass("order01");
    $(".main-container").addClass("order02");
    $("#comedia").removeClass("order02");
    $("#comedia").addClass("order01");
    window.scrollTo(0, 671);
});

$("#link-no-english").click(function()
{   
    $(".main-container").removeClass("order01");
    $(".main-container").addClass("order02");
    $("#no-english").removeClass("order02");
    $("#no-english").addClass("order01");
    window.scrollTo(0, 671);
});

/* MOBILE MENU */

function ensenyarCanvas() {
    $("#off-canvas").css("display" , "flex")
    $("#off-canvas").addClass("topzero")
    $("body").css("overflow", "hidden")
    $("#mobile-menu").attr("name" , "esconder-canvas")
    $(".barra-burger").addClass("estrenyer")}

function amagarCanvas() {
    $("#off-canvas").fadeOut(1200);
    $("body").css("overflow", "auto")
    $("#mobile-menu").attr("name" , "mostrar-canvas")
    setTimeout(function() {$("#off-canvas").removeClass("topzero");}, 1300)}

$("#mobile-menu").click(function() {
    var z = $(this).attr("name");
    if (z=="mostrar-canvas") {
        ensenyarCanvas();}
    else if (z=="esconder-canvas"){
        amagarCanvas();}
});

$("#link-sxxi-off").click(function()
{   
    $("section").removeClass("order01");
    $("section").addClass("order02");
    $("#sxxi").removeClass("order02");
    $("#sxxi").addClass("order01");
    window.scrollTo(0, 0);
    amagarCanvas();
});

$("#link-fin-milenio-off").click(function()
{   
    $("section").removeClass("order01");
    $("section").addClass("order02");
    $("#fin-milenio").removeClass("order02");
    $("#fin-milenio").addClass("order01");
    window.scrollTo(0, 0);
    amagarCanvas();
});

$("#link-classic-off").click(function()
{   
    $("section").removeClass("order01");
    $("section").addClass("order02");
    $("#classic").removeClass("order02");
    $("#classic").addClass("order01");
    window.scrollTo(0, 0);
    amagarCanvas();
});

$("#link-she-off").click(function()
{   
    $("section").removeClass("order01");
    $("section").addClass("order02");
    $("#she").removeClass("order02");
    $("#she").addClass("order01");
    window.scrollTo(0, 0);
    amagarCanvas();
});

$("#link-comedia-off").click(function()
{   
    $("section").removeClass("order01");
    $("section").addClass("order02");
    $("#comedia").removeClass("order02");
    $("#comedia").addClass("order01");
    window.scrollTo(0, 0);
    amagarCanvas();
});

$("#link-no-english-off").click(function()
{   
    $("section").removeClass("order01");
    $("section").addClass("order02");
    $("#no-english").removeClass("order02");
    $("#no-english").addClass("order01");
    window.scrollTo(0, 0);
    amagarCanvas();
    // 
});

/* TRAILERS */

$("#button-trailer-shadows").click(function(){
    $("#iframe-container-shadows").html('<iframe src="video-shadows.html" scrolling="no";></iframe>')
    $("#iframe-shadows").addClass("moure-cap-a-dins");})
    
$("#button-trailer-girl").click(function(){
    $("#iframe-container-girl").html('<iframe src="video-girl.html" scrolling="no";></iframe>')
    $("#iframe-girl").addClass("moure-cap-a-dins");})

$("#button-trailer-drive").click(function(){
    $("#iframe-container-drive").html('<iframe src="video-drive.html" scrolling="no";></iframe>')
    $("#iframe-drive").addClass("moure-cap-a-dins");})

$("#tancar-shadows").click(function(){
    $("#iframe-shadows").removeClass("fora-pantalla");
    $("#iframe-shadows").removeClass("moure-cap-a-dins")
    $("#iframe-shadows").addClass("moure-cap-a-fora");
    $("#iframe-container-shadows").html('')
    setTimeout(function() {
        $("#iframe-shadows").removeClass("moure-cap-a-fora")
        $("#iframe-shadows").addClass("fora-pantalla");}
        , 1200)})

$("#tancar-girl").click(function(){
    $("#iframe-girl").removeClass("fora-pantalla");
    $("#iframe-girl").removeClass("moure-cap-a-dins")
    $("#iframe-girl").addClass("moure-cap-a-fora");
    $("#iframe-container-girl").html('')
    setTimeout(function() {
        $("#iframe-girl").removeClass("moure-cap-a-fora")
        $("#iframe-girl").addClass("fora-pantalla");}
        , 1200)})

$("#tancar-drive").click(function(){
    $("#iframe-drive").removeClass("fora-pantalla");
    $("#iframe-drive").removeClass("moure-cap-a-dins")
    $("#iframe-drive").addClass("moure-cap-a-fora");
    $("#iframe-container-drive").html('')
    setTimeout(function() {
        $("#iframe-drive").removeClass("moure-cap-a-fora")
        $("#iframe-drive").addClass("fora-pantalla");}
        , 1200)})

/* final JQUERY */ });


