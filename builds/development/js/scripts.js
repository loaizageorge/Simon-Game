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
  });

  $("#red").click(function(){

      redSound.play();
  });

  $("#yellow").click(function(){

      yellowSound.play();
  });

  $("#blue").click(function(){

      blueSound.play();
  });

});
