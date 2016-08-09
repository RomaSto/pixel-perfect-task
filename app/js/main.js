$(function() {

   $(".fa-square-o").click(function () {

       $(this).toggleClass("fa-square-o");
       $(this).toggleClass(" fa-check-square");
       if ($(this).hasClass('fa-check-square')) {
           $(this).parents(".course").toggleClass("course courseInactive");
           $(this).siblings(".greenText").css("color", "#8cc34b");
           $(".courseInactive").find(".greenHeading").toggleClass("greenHeading no-greenHeading").css("color", "#212121");
           $(".courseInactive").find(".greenLine").toggleClass("greenLine no-greenLine").hide();
        //    $(".courseInactive").css("background-color", "#ECF4E2");

       }

       if ($(this).hasClass('fa-square-o')) {
           $(this).parents(".courseInactive").toggleClass("course courseInactive");
           $(this).siblings(".greenText").css("color", "#808080");
           $(".course").find(".no-greenHeading").toggleClass("greenHeading no-greenHeading").css("color", "#8cc34b");
           $(".course").find(".no-greenLine").toggleClass("greenLine no-greenLine").show();
        //    $(".courseInactive").css("background-color", "#ffffff");
       }

       if($('div').hasClass('course') === false){
           $(".row-finished").delay( 800 ).css("display", "flex");
           $(".courseInactive").fadeOut();
           $(".content-title").fadeOut();
       }



   });


   $(".course").mouseenter(function(){

       $(this).find(".greenHeading").css("color", "#8cc34b");
       $(this).find(".greenLine").css("opacity", "1");
   });
    $(".course").mouseleave(function(){

       $(this).find(".greenHeading").css("color", "#212121");
       $(this).find(".greenLine").css("opacity", "0.0");
   });

});
