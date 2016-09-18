$(document).ready(function() {

    var simonSequence = [];
    var mySequence = [];
    var simonTurnFlag = true;
    var strictMode = false;

    var i = 0;
    var color = "";
    var count = "0";

    $("#count").html(count);





    $("#play").click(function() {
      if(count==0){
        simonPlay();
      }
    });

    $("#reset").click(function() {
        resetGame();
    });

    $("#strict").click(function() {
        strictMode = !strictMode;
        $("#strict-alert").toggleClass("strict-on");
    });



    $(".box").click(function() {
        if (simonTurnFlag == false) {

            color = $(this).attr('id');
            simonTurnFlag = false;
            buttonClicked(color);
            console.log('Should not be here');
        }



    });

    function buttonClicked(color) {
        $("#count").html(count);
        var sound = color + "Sound";
        var playSound = document.getElementById(sound);
        $("#" + color).fadeTo(200, 0.5, function() {
            $("#" + color).fadeTo(200, 1.0);
        });
        playSound.play();
        if (simonTurnFlag == false) {
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

    function checkSequence() {
        for (var i = 0; i < mySequence.length; i++) {
            if (simonSequence[i] == mySequence[i]) {


            } else {
                $("#count").html("!!");
                gameOver();

            }

        }
        if (mySequence.length == simonSequence.length) {
          if(mySequence.length==3){
            alert('You Win!');
            resetGame();
          } else{
            simonTurnFlag = true;

            simonPlay();
          }
        }
    }

    function generateSimonPick() {
        var colorChoices = ["green", "red", "yellow", "blue"];
        min = Math.ceil(0);
        max = Math.floor(3);
        var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
        var simonColor = colorChoices[randomNumber];
        simonSequence.push(simonColor);
    }

    function simonPlay() {
        count++;
        i = 0;
        simonTurnFlag = true;
        generateSimonPick();
        play(simonSequence);
        mySequence = [];

    }

    function playSequence() {

      console.log("Simon Sequence:" +simonSequence.length);

        setTimeout(function() {

            buttonClicked(simonSequence[i]);


            if(i==simonSequence.length-1){
              simonTurnFlag=false;
              console.log("Equal");

            } else if(i < simonSequence.length-1) {
                console.log("Keep Going");
                console.log(simonTurnFlag);
                i++;
                playSequence();

            }console.log("I:"+i);
        }, 1000);
    }

    function gameOver() {
        if(strictMode==true){
          $("#count").html("!!");
        resetGame();
      } else{
        i = 0;
        alert('Game Over');
        mySequence=[];
        simonTurnFlag=true;
        play(simonSequence);
      }

    }

    function resetGame(){
      count = 0;
      $("#count").html(count);
      simonTurnFlag=true;
      simonSequence = [];
      mySequence=[];

    }

    function play(sequence){
      var i = 0;
      var interval = setInterval(function(){
        lightUp(sequence[i]);
        buttonClicked(sequence[i]);
        i++;
        if(i>=sequence.length){
          clearInterval(interval);
          simonTurnFlag=false;
        }
      },800);

    }

    function lightUp(color){
      console.log(color);
      $("#" + color).addClass('lit');
      window.setTimeout(function(){
        $("#" + color).removeClass('lit');
      },300);
    }

    function newRound(){
      var sequence = ["red","green","blue"];
      playSequence(sequence);
    }



});
