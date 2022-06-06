$(document).ready(function(){ /* inici JQUERY */

setTimeout(function() {$("#carregant").fadeOut();}, 3000);

// window.onload = function() {
//     $("#carregant").fadeOut()};

/* recopila JSON */

$.getJSON ("llista_original.php", function(pelis) {

    estrellaOn = '<img src="img/stars/star_on.png">';
    estrellaHalf = '<img src="img/stars/star_half.png">';
    estrellaOff = '<img src="img/stars/star_off.png">';

    /* main loop */
    
    for (n=0; n<pelis.length; n++) { 

        /* llargada titol / calcular estrellas */

        longitudTitol = pelis[n]["titol"].length;
        mostrarTitol = "";
        if(longitudTitol>30) {
            mostrarTitol = '<h2 class="titol titol-llarg">'+pelis[n]["titol"]+'</h2>';}
            else {mostrarTitol = '<h2 class="titol">'+pelis[n]["titol"]+'</h2>';}


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

        imprimir = '<li class="splide__slide movie"><div class="movie-back">'+mostrarTitol+'</h2><img class="portada" src="img/covers/'+pelis[n]["image"]+'.jpg"><h3 class="director">'+pelis[n]["director"]+'</h3><p class="dades"><span class="any">'+pelis[n]["any"]+'</span> / <span class="pais">'+pelis[n]["pais"]+'</span></p><a class="google" href="https://www.google.com/search?q='+pelis[n]["titol"]+' '+pelis[n]["director"]+' " target="_blank">Més info</a><div class="stars">'+mostrarEstrellas+'</div><a href="eliminar_pellicula.php?id='+pelis[n]["id"]+'" class="eliminar">Elimina pel·lícula</a><div></li>'

        if(pelis[n]["any"]>1999) {$('#splide__list_sxxi').append(imprimir);}
            else if(pelis[n]["any"]<1980) {$('#splide__list_classic').append(imprimir);}       
                else {$('#splide__list_fin-milenio').append(imprimir);}

        
        if(pelis[n]["dona"]==1) {$('#splide__list_she').append(imprimir);}
        
        if(pelis[n]["comedia"]==1) {$('#splide__list_comedia').append(imprimir);}

        if(pelis[n]["pais"]!="USA" && pelis[n]["pais"]!="UK" && pelis[n]["pais"]!="NOVA ZELANDA" && pelis[n]["pais"]!="ÀFRICA DEL SUD" && pelis[n]["pais"]!="AUSTRÀLIA") {$('#splide__list_no-english').append(imprimir);}
             
    }

    /* montar sliders */
       
    var dispositivesResponsive = window.matchMedia('(min-device-width: 768px)');

    if(dispositivesResponsive.matches) {
        
        var elms = document.getElementsByClassName( 'splide' );
        for ( var i = 0; i < elms.length; i++ ) {
    
            if(i==0) {new Splide( elms[ i ], {type: 'loop', perPage: 1, pagination: false, /* autoplay: true chocho ,*/ interval: 5000}).mount();}
            else {new Splide( elms[ i ], {type: 'loop', perPage: 6}).mount();}}}
        
        else {
            
            var elms = document.getElementsByClassName( 'splide' );

            for ( var i = 0; i < elms.length; i++ ) {
    
                if(i==0) {new Splide( elms[ i ], {type: 'loop', perPage: 1, pagination: false, arrows: false, /* autoplay: true chocho ,*/ interval: 5000}).mount();}
                else {new Splide( elms[ i ], {type: 'loop', perPage: 2, arrows: false}).mount();}}}


/* final JSON */
});

$(window).on('load', function () {
    $("#carregant").fadeOut(1000);
});

/* AFEGIR PELÍCULES */

$("#afegeix").click(function()
{
    $(this).addClass("desplazar-afegeix");
    $("form").trigger("reset");
    $("#formulari-container").removeClass("nodisplay");
    $("#formulari-container").addClass("show-formulari");
    $("#formulari-container-inner").addClass("moure-cap-amunt");
    var x=window.scrollX;
    var y=window.scrollY;
    window.onscroll=function(){window.scrollTo(x, y);};

    /*$('body').addClass('stop-scrolling');*/

})


$("#tancar-formulari").click(function()
{
    $("#formulari-container").addClass("amaga-formulari");
    $("#afegeix").addClass("tornar-afegeix");
    $("label").removeClass("canviar-brillo");
    $(':input').removeAttr('placeholder');
    $("form").trigger("reset");
    window.onscroll=function(){}
    /*$('body').removeClass('stop-scrolling');*/
    setTimeout(function() {$("#formulari-container").addClass("nodisplay"); $("#formulari-container").removeClass("amaga-formulari"); $("#afegeix").removeClass("tornar-afegeix");$("#afegeix").removeClass("desplazar-afegeix");$(window).off('scroll');}, 1201)
    
})

/* MAIN MENU */

$("#link-sxxi").click(function()
{   
    $(".main-container").removeClass("order01");
    $(".main-container").addClass("order02");
    $("#sxxi").removeClass("order02");
    $("#sxxi").addClass("order01");
    window.scrollTo(0, 680);
});

$("#link-fin-milenio").click(function()
{   
    $(".main-container").removeClass("order01");
    $(".main-container").addClass("order02");
    $("#fin-milenio").removeClass("order02");
    $("#fin-milenio").addClass("order01");
    window.scrollTo(0, 680);
});

$("#link-classic").click(function()
{   
    $(".main-container").removeClass("order01");
    $(".main-container").addClass("order02");
    $("#classic").removeClass("order02");
    $("#classic").addClass("order01");
    window.scrollTo(0, 680);
});

$("#link-she").click(function()
{   
    $(".main-container").removeClass("order01");
    $(".main-container").addClass("order02");
    $("#she").removeClass("order02");
    $("#she").addClass("order01");
    window.scrollTo(0, 680);
});

$("#link-comedia").click(function()
{   
    $(".main-container").removeClass("order01");
    $(".main-container").addClass("order02");
    $("#comedia").removeClass("order02");
    $("#comedia").addClass("order01");
    window.scrollTo(0, 680);
});

$("#link-no-english").click(function()
{   
    $(".main-container").removeClass("order01");
    $(".main-container").addClass("order02");
    $("#no-english").removeClass("order02");
    $("#no-english").addClass("order01");
    window.scrollTo(0, 680);
});

/* SHRINKING */

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    $("#motto").addClass("shrink");
    $("#logo").addClass("shrink");
    $("#header-inner").addClass("shrink");
    $("#logoh1").addClass("shrink");
    $("#off-canvas-but").addClass("shrink");
    $("#mobile-menu").addClass("shrink");}
    
else {
    $("#motto").removeClass("shrink");
    $("#logo").removeClass("shrink");
    $("#header-inner").removeClass("shrink");
    $("#logoh1").removeClass("shrink");
    $("#off-canvas-but").removeClass("shrink");
    $("#mobile-menu").removeClass("shrink");}
}

/* MOBILE MENU */

function ensenyarCanvas() {
    $("#off-canvas").css("display" , "flex")
    $("#off-canvas").addClass("topzero")
    $("#burger-but").addClass("estrenyer")
    $("#cross-but").addClass("eixamplar")
    $("#obrir-off-canvas").removeClass("active")
    $("#abrir-menu-label").fadeOut(400, function(){$("#cerrar-menu-label").fadeIn(1400)})
    }

function amagarCanvas() {
    $("#off-canvas").fadeOut(1200);
    $("#cross-but").removeClass("eixamplar")
    $("#cross-but").addClass("estrenyer")
    $("#burger-but").removeClass("estrenyer")
    $("#burger-but").addClass("eixamplar")
    $("#obrir-off-canvas").addClass("active")
    $("#cerrar-menu-label").fadeOut(400, function(){$("#abrir-menu-label").fadeIn(1400)})
    setTimeout(function() {$("#off-canvas").removeClass("topzero"); $("#burger-but").removeClass("eixamplar")}, 1300)}

$("#off-canvas-but").click(function() {
    if($("#obrir-off-canvas").attr("class")=="active") {
        ensenyarCanvas()}
    else {amagarCanvas()}});

$("#link-sxxi-off").click(function()
{   
    $(".main-container").removeClass("order01");
    $(".main-container").addClass("order02");
    $("#sxxi").removeClass("order02");
    $("#sxxi").addClass("order01");
    $("body").scrollTop(725);
    document.documentElement.scrollTop = 725;
    amagarCanvas();
});

$("#link-fin-milenio-off").click(function()
{   
    $(".main-container").removeClass("order01");
    $(".main-container").addClass("order02");
    $("#fin-milenio").removeClass("order02");
    $("#fin-milenio").addClass("order01");
    $("body").scrollTop(725);
    document.documentElement.scrollTop = 725;
    amagarCanvas();
});

$("#link-classic-off").click(function()
{   
    $(".main-container").removeClass("order01");
    $(".main-container").addClass("order02");
    $("#classic").removeClass("order02");
    $("#classic").addClass("order01");
    $("body").scrollTop(725);
    document.documentElement.scrollTop = 725;
    amagarCanvas();
});

$("#link-she-off").click(function()
{   
    $(".main-container").removeClass("order01");
    $(".main-container").addClass("order02");
    $("#she").removeClass("order02");
    $("#she").addClass("order01");
    $("body").scrollTop(725);
    document.documentElement.scrollTop = 725;
    amagarCanvas();
});

$("#link-comedia-off").click(function()
{   
    $(".main-container").removeClass("order01");
    $(".main-container").addClass("order02");
    $("#comedia").removeClass("order02");
    $("#comedia").addClass("order01");
    $("body").scrollTop(725);
    document.documentElement.scrollTop = 725;
    amagarCanvas();
});

$("#link-no-english-off").click(function()
{   
    $(".main-container").removeClass("order01");
    $(".main-container").addClass("order02");
    $("#no-english").removeClass("order02");
    $("#no-english").addClass("order01");
    $("body").scrollTop(725);
    document.documentElement.scrollTop = 725;
    amagarCanvas();
});

/* TRAILERS */

$("#button-trailer-shadows").click(function(){
    $("#trailer-shadows").append('<video id="video-shadows" class="video-container" controls autoplay loop poster="img/shadows-portada.jpg"><source src="https://pruebaprimero.com/fletnix-videos/shadows-video.mp4" type="video/mp4"></video>')
    $("#trailer-shadows ").addClass("moure-cap-a-dins");})

$("#button-trailer-girl").click(function(){
    $("#trailer-girl").append('<video id="video-girl" class="video-container" controls autoplay loop poster="img/girl-portada.jpg"><source src="https://pruebaprimero.com/fletnix-videos/girl-video.mp4" type="video/mp4"></video>')
    $("#trailer-girl ").addClass("moure-cap-a-dins");})

$("#button-trailer-drive").click(function(){
    $("#trailer-drive").append('<video id="video-drive" class="video-container" controls autoplay loop poster="img/drive-portada.jpg"><source src="https://pruebaprimero.com/fletnix-videos/drive-video.mp4" type="video/mp4"></video>')
    $("#trailer-drive ").addClass("moure-cap-a-dins");})

$("#tancar-shadows").click(function(){
    $("#trailer-shadows").removeClass("fora-pantalla");
    $("#trailer-shadows").removeClass("moure-cap-a-dins")
    $("#trailer-shadows").addClass("moure-cap-a-fora");
    setTimeout(function() {
        $("#video-shadows").remove();
        $("#trailer-shadows").removeClass("moure-cap-a-fora")
        $("#trailer-shadows").addClass("fora-pantalla");}
        , 701)})

$("#tancar-girl").click(function(){
    $("#trailer-girl").removeClass("fora-pantalla");
    $("#trailer-girl").removeClass("moure-cap-a-dins")
    $("#trailer-girl").addClass("moure-cap-a-fora");
    setTimeout(function() {
        $("#video-girl").remove();
        $("#trailer-girl").removeClass("moure-cap-a-fora")
        $("#trailer-girl").addClass("fora-pantalla");}
        , 701)})

$("#tancar-drive").click(function(){
    $("#trailer-drive").removeClass("fora-pantalla");
    $("#trailer-drive").removeClass("moure-cap-a-dins")
    $("#trailer-drive").addClass("moure-cap-a-fora");
    setTimeout(function() {
        $("#video-drive").remove();
        $("#trailer-drive").removeClass("moure-cap-a-fora")
        $("#trailer-drive").addClass("fora-pantalla");}
        , 701)})

/* IMATGES MOBIL */

var dispositivesResponsivePics = window.matchMedia('(max-device-width: 767px)');
if(dispositivesResponsivePics.matches) {
    $("#pic-fondo-shadows").attr("src", "img/shadows-portada.jpg");
    $("#pic-fondo-girl").attr("src", "img/girl-portada.jpg");
    $("#pic-fondo-drive").attr("src", "img/drive-portada.jpg");}

/* SWIPE */

 $("#shadows-shadows").onSwipe(function(results){
     if(results.right == true) {
    $("#trailer-shadows").removeClass("fora-pantalla");
    $("#trailer-shadows").removeClass("moure-cap-a-dins")
    $("#trailer-shadows").addClass("moure-cap-a-fora");
    setTimeout(function() {
        $("#video-shadows").remove();
        $("#trailer-shadows").removeClass("moure-cap-a-fora")
        $("#trailer-shadows").addClass("fora-pantalla");}
        , 701)}});

$("#girl-girl").onSwipe(function(results){
    if(results.right == true) {
    $("#trailer-girl").removeClass("fora-pantalla");
    $("#trailer-girl").removeClass("moure-cap-a-dins")
    $("#trailer-girl").addClass("moure-cap-a-fora");
    setTimeout(function() {
        $("#video-girl").remove();
        $("#trailer-girl").removeClass("moure-cap-a-fora")
        $("#trailer-girl").addClass("fora-pantalla");}
        , 701)}});

$("#drive-drive").onSwipe(function(results){
    if(results.right == true) {
    $("#trailer-drive").removeClass("fora-pantalla");
    $("#trailer-drive").removeClass("moure-cap-a-dins")
    $("#trailer-drive").addClass("moure-cap-a-fora");
    setTimeout(function() {
        $("#video-drive").remove();
        $("#trailer-drive").removeClass("moure-cap-a-fora")
        $("#trailer-drive").addClass("fora-pantalla");}
        , 701)}});




/* final JQUERY */ });
