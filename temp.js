    /* montar sliders */
       
    var dispositivesResponsive = window.matchMedia('(min-device-width: 768px)');

    if(dispositivesResponsive.matches) {
        var elms = document.getElementsByClassName( 'splide' );
        for ( var i = 0; i < elms.length; i++ ) {
            if(i==0) {
        new Splide( elms[ i ], {type: 'loop', perPage: 1}).mount();}
        else {
            new Splide( elms[ i ], {type: 'loop', perPage: 6}).mount();}
       
    }
    
    
    
    
    }
    
    
    
    
    
    else {
        var elms = document.getElementsByClassName( 'splide' );
        for ( var i = 0; i < elms.length; i++ ) {
        new Splide( elms[ i ], {type: 'loop', perPage: 2, arrows: false}).mount();}};
