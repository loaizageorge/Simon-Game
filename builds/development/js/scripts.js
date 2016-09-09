$(document).ready(function(){

  var simonSequence = [];
  var mySequence = [];
  var simonTurn =false;

  var color = "";

  generateSimonPick();
  console.log(simonSequence);
  $(".box").click(function(){
    color = $(this).attr('id');
    buttonClicked(color);

  });

  function buttonClicked(){
    var sound = color+"Sound";
    var playSound = document.getElementById(sound);
    $("#"+color).fadeTo(200, 0.5, function() { $("#"+color).fadeTo(200, 1.0); });
    playSound.play();
    buildUpSequence(color);
    checkSequence();


  }

  function buildUpSequence(color){
    if(simonTurn){
      simonSequence.push(color);
    }else{
      mySequence.push(color);
    }
    console.log(mySequence);
  }

  function checkSequence(){
    for(var i = 0; i<mySequence.length;i++){
      if(simonSequence[i]==mySequence[i]){
        console.log("true");
      }else{
        alert("game Over");
        console.log("false");
      }

    }
  }

  function generateSimonPick(){
    var colorChoices = ["green","red","yellow","blue"];
    min = Math.ceil(0);
    max = Math.floor(3);
    var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
    var simonColor = colorChoices[randomNumber];
    simonSequence.push(simonColor);

  }

});
