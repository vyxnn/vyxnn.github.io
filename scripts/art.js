
$(document).ready(function(){
    var $artbody = $('.artbody').imagesLoaded( 
        function(){
            // init Masonry after all images have loaded
            $artbody.masonry({
                itemSelector: '.artpost', 
                columnWidth: 249        // options...
            });
      });
});
  