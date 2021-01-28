$(document).ready(function(){
    var $projectbody = $('.projectbody').imagesLoaded( 
        function(){
            // init Masonry after all images have loaded
            $projectbody.masonry({
                itemSelector: '.post', 
                columnWidth: 312      
            });
      });
});