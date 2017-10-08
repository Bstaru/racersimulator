 $(document).ready(function (){

    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 2000);
        }
    });


    $('.infoDes').css('opacity', 0);

    $('#nosotros').waypoint(function() {
        $('.infoDes').addClass('bounceIn');
        },
        { offset: '50%' }
    );

 });

