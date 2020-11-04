$(document).ready(function(){

    $(window).scroll(function() {
        if ($(".navbar").offset().top > 300) {
            $(".navbar").removeClass("navbar-top");
            $(".navbar").addClass("navbar-fixed");
        } else {
            $(".navbar").removeClass("navbar-fixed");
            $(".navbar").addClass("navbar-top");
        }
    });
    
    $('a[href^="#"]').on('click', function(event) {

        var target = $( $(this).attr('href') );

        console.log(target);
    
        if( target.length ) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 500);
        }
    
    });

    $('#btnScrollToTop').click(function(){
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });

    $('#page-1').click(function() {
        window.location.href = 'views/course/page-1.html';
        return false;
    });

  });