 $(document).ready(function(){
        $("#anchor-link-1").on("click", function(){
            var scroll=$("#services").offset().top;
            $('html, body').animate({scrollTop: scroll}, 2000);
        });
        $("#anchor-link-2").on("click", function(){
            var scroll=$("#portfolio").offset().top;
            $('html, body').animate({scrollTop: scroll}, 2000);
        });
        $("#anchor-link-3").on("click", function(){
            var scroll=$("#anchor-3").offset().top;
            $('html, body').animate({scrollTop: scroll}, 2000);
        });
        $("#anchor-link-4").on("click", function(){
            var scroll=$("#anchor-4").offset().top;
            $('html, body').animate({scrollTop: scroll}, 2000);
        });
    });