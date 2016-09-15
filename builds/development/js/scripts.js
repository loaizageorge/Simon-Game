$(document).ready(function(){

  var simonSequence = [];
  var mySequence = [];
  simonTurnFlag=true;
  var i = 0;
  var color = "";
  var count = "0";

  $("#count").html(count);
  simonPlay();






  $(".box").click(function(){
    color = $(this).attr('id');
    simonTurnFlag=false;
    buttonClicked(color);



  });

  function buttonClicked(color){
    $("#count").html(count);
    var sound = color+"Sound";
    var playSound = document.getElementById(sound);
    $("#"+color).fadeTo(200, 0.5, function() { $("#"+color).fadeTo(200, 1.0); });
    playSound.play();
    if(simonTurnFlag==false){
      mySequence.push(color);
      checkSequence();
    }
  }

  /*function buildUpSequence(color){
    if(simonTurnFlag){
      simonSequence.push(color);
    }else{
      mySequence.push(color);
    }
    console.log(mySequence);
  }*/

  function checkSequence(){
    for(var i = 0; i<mySequence.length;i++){
      if(simonSequence[i]==mySequence[i]){
        console.log("Good");
      }else{
        alert("gameOver");
        gameOver();
      }

    }
    if(mySequence.length == simonSequence.length){
      simonTurnFlag=true;
      simonPlay();
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

  function simonPlay(){
    count++;

    i = 0;
    simonTurnFlag=true;
    generateSimonPick();
    playSequence();
    mySequence = [];

  }

  function playSequence(){
    setTimeout(function(){
      buttonClicked(simonSequence[i]);
      i++;

      if(i<simonSequence.length){
        playSequence();
      }
    },1000)
  }

  function gameOver(){
    count=0;
    simonSequence=[];
    simonPlay();
  }

});
