/*jslint browser: true*/
/*global $, jQuery, alert*/

function angle(ex, ey) {
  var dy = ey;
  var dx = ex - $(window).width()/3;
  var theta = Math.atan2(dy, dx); 
  theta *= 180 / Math.PI; // rads to degs, range (-180, 180]
  //if (theta < 0) theta = 360 + theta; // range [0, 360)
  return theta;
}

$(document).ready(function() {
    
    
    
    /*
    $(document).on("mousemove", function (event) {
        
        var ang = angle(event.pageX, event.pageY);
        document.getElementById("gradient").style.background = ' -moz-linear-gradient(' + ang + 'deg,  #000000 0%, #ffffff 100%)';    
        document.getElementById("gradient").style.background = ' -webkit-linear-gradient(' + ang + 'deg,  #000000 0%,#ffffff 100%)';
        
    });
    */
    
});

