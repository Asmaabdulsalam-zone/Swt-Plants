
// Loading Screen
$(window).on('load', function(){ 
   // document is loaded and DOM is ready
   $(".loading-overlay").fadeOut(2000, function(){
    $("body").css("overflow","auto");
    $(this).remove();
});
});

