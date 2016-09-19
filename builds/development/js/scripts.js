$(document).ready(function() {

    var simonSequence = [];
    var mySequence = [];
    var simonsTurn = true;
    var strictMode = false;

    var turn = "0";

    updateTurn();


    // Handle the controls when clicked (Play, Reset, Strict Mode).


    $("#play").click(function() {
      // Only works when game is first loaded, game is lost on strict, and when
      // reset is pressed
        if (turn == 0) {
            newRound(false);
        }

    });

    $("#reset").click(function() {
        resetGame();
    });

    $("#strict").click(function() {
        strictMode = !strictMode;
        $("#strict-alert").toggleClass("strict-on");
    });

    // Handle color being clicked, locked when it's Simon's Turn

    $(".color").click(function() {
        if (simonsTurn == false) {

          // Pass clicked color to handler

            color = $(this).attr('id');
            buttonClicked(color);
        }
    });

    function buttonClicked(color) {

      //Plays sound and changes color when player clicks a color
        playSound(color);
        lightUp(color);
      // Push color to player Sequence and check if it matches Simon's sequence
        mySequence.push(color);
        checkSequence();
    }

    function playSound(color){

      var sound = color + "Sound";
      var beep = document.getElementById(sound);
      beep.play();
      updateTurn();
    }

    function lightUp(color){
      $("#" + color).fadeTo(200, 0.5, function() {
          $("#" + color).fadeTo(200, 1.0);
      });
    }

    function checkSequence() {
        for (var i = 0; i < mySequence.length; i++) {
            if (simonSequence[i] == mySequence[i]) {
              // If color in position(i) is the same for both sequences, continues checking,
              // if not, game ends as soon as there is a difference.
            } else {
                $("#turn").html("!!");
                gameOver();
            }
        }
        // If player correctly matches the entire sequence,
        // either start a new round or display win message and restart game.
        if (mySequence.length == simonSequence.length) {
            if (mySequence.length == 10) {
                alert('You Win!');
                resetGame();
            } else {
                simonsTurn = true;
                newRound(false);
            }
        }
    }

    function generateSimonPick() {
      // Randomly pick a number from 0-3, which is used as the index to pick a
      // color from the 4 possible choices that are stored in an array.
        var colorChoices = ["green", "red", "yellow", "blue"];
        min = Math.ceil(0);
        max = Math.floor(3);
        var random = Math.floor(Math.random() * (max - min + 1)) + min
        simonSequence.push(colorChoices[random]);
    }

    // Takes one parameter, lost, where this means whether the new round is advancing
    //(lost ==false) or the new Round would repeat last sequence (lost == true)
    function newRound(lost) {
        // If coming from a winning round, increment turn and pick a new color
        // for Simon. If not, player just lost, so repeat the last sequence only.
        // Strict Mode will never come in here if there is a loss.
        if(lost==false){
          turn++;
          generateSimonPick();
        }
        simonsTurn = true;
        play(simonSequence);
        mySequence = [];

    }

    function gameOver() {
        if (strictMode == true) {
            resetGame();
        } else {
            newRound(true);
        }

    }

    function resetGame() {
      // Activated by loss on strict mode or by the press of reset button.
      // Only place where simonSequence is reset.
        turn = 0;
        updateTurn();
        $("#turn").html("!!");
        simonsTurn = true;
        simonSequence = [];
        mySequence = [];
        return false;

    }

    function play(sequence) {
      // Used to play sound and light up buttons for Simon.
        var i = 0;
        var interval = setInterval(function() {

            playSound(sequence[i]);
            lightUp(sequence[i]);
            i++;
            // When all the colors have been clicked(light up and beep)
            // it becomes the players turn
            if (i >= sequence.length) {
                clearInterval(interval);
                simonsTurn = false;
            }
        }, 800);

    }


    function updateTurn(){
      $('#turn').html(turn);
    }

});
