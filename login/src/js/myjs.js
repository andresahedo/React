
$( window ).resize(function() {
    if( $(window).width() < 991 ){
        if( $('.carousel-inner > .controlLeftCarousel').hasClass('btn-group-vertical') ){
            $('.carousel-inner > .controlLeftCarousel').removeClass( "btn-group-vertical" );
            $('.carousel-inner > .controlLeftCarousel').addClass( "btn-group" ).css( "width","100%") ;
        }
     }
     else {
        if( $('.carousel-inner > .controlLeftCarousel').hasClass('btn-group') ){
            $('.carousel-inner > .controlLeftCarousel').removeClass( "btn-group" );
            $('.carousel-inner > .controlLeftCarousel').addClass( "btn-group-vertical" ).css( "width","auto" );
        }
     }
});
if( $(window).width() < 991 ){
    if( $('.carousel-inner > .controlLeftCarousel').hasClass('btn-group-vertical') ){
        $('.carousel-inner > .controlLeftCarousel').removeClass( "btn-group-vertical" );
        $('.carousel-inner > .controlLeftCarousel').addClass( "btn-group" ).css( "width","100%") ;
    }
 }
 else {
    if( $('.carousel-inner > .controlLeftCarousel').hasClass('btn-group') ){
        $('.carousel-inner > .controlLeftCarousel').removeClass( "btn-group" );
        $('.carousel-inner > .controlLeftCarousel').addClass( "btn-group-vertical" ).css( "width","auto" );
    }
 }

/* Create NEW THEAD in tables ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */ 
$('.miTablaSlider' ).prepend( '<div class="theadDivBox"</div>' )
        
$( ".miTablaSlider > table > thead > tr > th" ).each(function( index ) {
    var theadText =  $( this ).text();
    var widthInThead = $( this ).css("width")
    var list = $( '.table-responsive:nth-child(1) > .table' );
    var listItems = $(this).children('div');
    
    $( ".theadDivBox" ).append( '<div class="theadDiv" style="width:'+ widthInThead  +'">'+theadText+'</div>' )
});
$('thead' ).css({ 
    "visibility":"hidden"
})
$( window ).resize( function() {
    /* Set width and height to THEAD +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
    var widthCarouselPanel = $( "table" ).css("width").replace(/[^-\d\.]/g, '');
    $(".theadDivBox").attr( 'style', "width:"+ widthCarouselPanel+"px" )

    /* Set width and to TH +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
    $( ".table-responsive:nth-child(1) > table > thead > tr > th" ).each(function( index ) {
        var widthInThead = $( this ).css("width")
        $( ".theadDiv" ).each( function(indexDivs) {
            if( index === indexDivs ){
                $(this).attr( 'style', "width:"+ widthInThead )
            }
        });
    });

    /* Set width and to FOOTER +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
    $( '.tableFooter' ).css({ 
        "width:" : widthCarouselPanel +"px !important",
        'background-color':'yellow  !important' 
    });

    var listNavCarHeight = $('.controlLeftCarousel').css("height").replace(/[^-\d\.]/g, '');
    var theadAutoHeight = $('.theadDivBox').css("height").replace(/[^-\d\.]/g, '');
    var theadInvisibleHeight = $('.table > thead').css("height").replace(/[^-\d\.]/g, '');
    var hasClassFixedOnly = $('.theadDivBox').hasClass("fixedNewSlide")

    var totallll = parseFloat(listNavCarHeight)+parseFloat(theadAutoHeight)+parseFloat(theadInvisibleHeight)
    console.log("totallll  "+listNavCarHeight,theadAutoHeight,theadInvisibleHeight)

    if ( $(window).width() < 991 ) {
        if ( hasClassFixedOnly ) {
            $( '.scroll-carousel .theadDivBox' ).css(
                'top',listNavCarHeight+"px"
            )
            $( '.table' ).css({ /* '301.8753px' */
                'top':'-34px'
            })
        }else if ( !hasClassFixedOnly ){
            $( '.scroll-carousel .theadDivBox'  ).css(
                'top',"0px"
            )
            $( '.table' ).css(
                'top','-34px'
            )
        }
    }else{
        if ( hasClassFixedOnly ) {
            
        }else if ( !hasClassFixedOnly ){
            $( '.scroll-carousel .theadDivBox'  ).css(
                'top',"0px"
            )
            $( '.table' ).css(
                'top','-34px'
            )
        }
    }
});


/* Correct THEAD width iinside carousel-panels ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */ 
$( ".scroll-carousel" ).each( function( iPanelGral ){
    var encContentBoxes = $(this).find(".carousel-item")
    var encClickButton = $(this).find(".carousel-inner > div > button")

    $( encClickButton ).each( function( ibtnPanel ){
        $( this ).click(function() {
            var listNavCarHeight = $('.controlLeftCarousel').css("height").replace(/[^-\d\.]/g, '');
            var theadAutoHeight = $('.theadDivBox').css("height").replace(/[^-\d\.]/g, '');
            var theadInvisibleHeight = $('.table > thead').css("height").replace(/[^-\d\.]/g, '');
            var hasClassFixedOnly = $('.theadDivBox').hasClass("fixedNewSlide")

            var totallll = parseFloat(listNavCarHeight)+parseFloat(theadAutoHeight)+parseFloat(theadInvisibleHeight)
            var widthCarouselPanel = $( ".table-responsive" ).css("width").replace(/[^-\d\.]/g, '');
            //$(".theadDivBox").css( "width:", widthCarouselPanel+"px" );

            $( encContentBoxes ).each( function( iboxPanel ){
                var findrTheadCarousel = $(this).find('.theadDivBox').length > 0
                if( ibtnPanel===iboxPanel && findrTheadCarousel===true ){

                    var widthCarouselPanelcv = $( ".carouselForm " ).css("width").replace(/[^-\d\.]/g, '');
                    
                    // $( '.scroll-carousel .theadDivBox' ).css({
                    //     'display':"block"
                    // })

                    /* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++  */
                    if ( $(window).width() < 991 ) {
                        if( hasClassFixedOnly ) {
                            $( '.scroll-carousel .theadDivBox' ).css({
                                'top':listNavCarHeight+"px",
                                "width:": widthCarouselPanel+"px" 
                            })
                            $( '.table' ).css({ 
                                'top':'-34px'
                            })
                        }else if( !hasClassFixedOnly ){ /* El error en el THEAD - width por 17px de estar fijo y luego regresar al primer carousel ejecuta aqui*/ 
                            $( '.scroll-carousel .theadDivBox'  ).css({
                                'top':"1px",
                                "width:": (widthCarouselPanel-17)+"px" 
                            })
                            $( '.table' ).css(
                                'top','-35px'
                            )
                        }
                    }else{
                        if( hasClassFixedOnly ) {
                        }else if( !hasClassFixedOnly ){
                            $( '.scroll-carousel .theadDivBox'  ).css(
                                'top',"0px"
                            )
                            $( '.table' ).css(
                                'top','-34px'
                            )
                        }
                    }
                    /* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++  */
                }
            });
        });
    });
});


// Scroll to Top 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 1000) {
        $('#return-to-top').fadeIn(200)
    } else {
        $('#return-to-top').fadeOut(200);
    }
});
$('#return-to-top').click(function() {
    $('body,html').animate({
        scrollTop : 0
    }, 1000);
});

// Para ToolTips
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  //$('[data-toggle="tooltip"]').tooltip({trigger: "click"});
})

// Boton cambio de clase
/*$(document).ready(function(){
    $("button").click(function(event){
        $("#bgColor").addClass("btnOn");
    });
});*/


$(document).ready(function(){
    $(this).scrollTop( 0 ); /* Es para que el slider no se desconfigure al recargar la página cuando los elementos se fijan al hacer scroll */

    $( "#bgColor > div > a" ).each(function( index ) {
        var buttonAqui = $("button",this);
        var pAqui = $(this).find("p");

        console.log( index + ": " + $( pAqui ).text() );
        /* if( index === 2){
            $(this).css("background-color","red")
        } */
        $(this).click(function(){
            $(this).toggleClass('btnOn linex');
            /*$(this).toggleClass("btnOn");*/
        });
    });
});


