$(document).ready(function(){
  var soundOne = document.getElementById("one");
  var soundTwo = document.getElementById("two");
  var soundThree = document.getElementById("three");
  var soundFour = document.getElementById("four");

  $("#red").click(function(){

      soundOne.play();
  });

  $("#green").click(function(){

      soundTwo.play();
  });

  $("#yellow").click(function(){

      soundThree.play();
  });

  $("#blue").click(function(){

      soundFour.play();
  });

});
