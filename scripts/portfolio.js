$(document).ready(function(){
    var $projectbody = $('.portbody').imagesLoaded( 
        function(){
            // init Masonry after all images have loaded
            $projectbody.masonry({
                itemSelector: '.portpost', 
            });
      });
});


function closeclick(event, name) {
    var modal = document.getElementById(name); 
    modal.style.display = "none";    
}

function modalclick(event, name){
    var modal = document.getElementById(name); 
    modal.style.display = "block";
}

$(document).click(function (e) {
    if ($(e.target).hasClass('modal')) {
        $(e.target).fadeOut(0);
    }
});
