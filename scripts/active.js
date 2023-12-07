$(document).ready(function(){
    
    if($("main").hasClass("mainIndex")) {
        $("#linkIndex").addClass("active");
        $("#linkNews, #linkJumenterie,#linkEtalon,#linkContact").removeClass("active");
    };
    if($("main").hasClass("mainNews")) {
        $("#linkNews").addClass("active");
        $("#linkindex, #linkJumenterie,#linkEtalon,#linkContact").removeClass("active");
    };
    if($("main").hasClass("mainJumenterie")) {
        $("#linkJumenterie").addClass("active");
        $("#linkNews, #linkIndex,#linkEtalon,#linkContact").removeClass("active");
    };
    if($("main").hasClass("mainEtalon")) {
        $("#linkEtalon").addClass("active");
        $("#linkNews, #linkJumenterie,#linkIndex,#linkContact").removeClass("active");
    };
    if($("main").hasClass("mainContact")) {
        $("#linkContact").addClass("active");
        $("#linkNews, #linkJumenterie,#linkEtalon,#linkIndex").removeClass("active");
    }
    })