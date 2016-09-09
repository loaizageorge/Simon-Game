$(document).ready(function(){


  var simonSequence = [""];
  var mySequence = [""];
  var myTurn =false;

  var boxId = "";

  $(".box").click(function(){
    boxId = $(this).attr('id');
    buttonClicked(boxId);

  });

  function buttonClicked(){
    var sound = boxId+"Sound";
    var playSound = document.getElementById(sound);
    playSound.play();
    $("#"+boxId).fadeTo(200, 0.5, function() { $("#"+boxId).fadeTo(200, 1.0); });
  }

});
