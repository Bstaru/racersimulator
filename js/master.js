$( document ).ready(function() {

          $('#camera_wrap_2').camera({
               height: '35%',
               pagination: false,
               thumbnails: true
         });
          $("#camera_wrap_2").cameraStop();
          $( ".camera_thumbs_cont ul img" ).click(function() {

          var index = $( ".camera_thumbs_cont ul img" ).index( this );
           $("#myCarousel").carousel(index);
          });
});
