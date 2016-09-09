$(document).ready(function(){
  var greenSound = document.getElementById("greenSound");
  var redSound = document.getElementById("redSound");
  var yellowSound = document.getElementById("yellowSound");
  var blueSound = document.getElementById("blueSound");

  var simonSequence = [""];
  var mySequence = [""];
  var myTurn =false;

  $("#green").click(function(){

      greenSound.play();
      $('#green').fadeTo(200, 0.5, function() { $('#green').fadeTo(200, 1.0); });
  });

  $("#red").click(function(){

      redSound.play();
      $('#red').fadeTo(200, 0.5, function() { $('#red').fadeTo(200, 1.0); });
  });

  $("#yellow").click(function(){

      yellowSound.play();
      $('#yellow').fadeTo(200, 0.5, function() { $('#yellow').fadeTo(200, 1.0); });
  });

  $("#blue").click(function(){

      blueSound.play();
      $('#blue').fadeTo(200, 0.5, function() { $('#blue').fadeTo(200, 1.0); });
  });

});
