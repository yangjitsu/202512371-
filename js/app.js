$(function(){

    $("nav button").click(function(){

        const page = $(this).data("page");

        $(".page").removeClass("active");

        $("#" + page).addClass("active");

    });

});