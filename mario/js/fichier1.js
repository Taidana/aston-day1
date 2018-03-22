$(document).ready(function() {
    $(document).keydown(function(key) {
      var pos = $('.mario').position();
        switch(parseInt(key.which,10)) {
            case 37:
                $('.mario').animate({left: "-=20px"}, 'fast');
              break;
            case 39:
            $('.mario').animate({left: "+=20px"}, 'fast');
              break;    
            case 32: //hop up and over Press spacebar key
              break;
        }

    });
});
