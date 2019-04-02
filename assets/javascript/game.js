
$(document).ready(function () {

  "use strict"; //use strict mode to prevent silly errors

  //this function will be used later to generate numbers
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; 
    //The maximum is exclusive and the minimum is inclusive
  }


  //set up global variables
  var wins = 0;
  var losses = 0;
  var runningTotal = 0;
  var grandTotal = 0;
  var yellowCrystal = 0;
  var greenCrystal = 0;
  var redCrystal = 0;
  var blueCrystal = 0;

  //this function brings game to base state

  var restartGame = function () {
    runningTotal = 0;
    $("#current-total").text(runningTotal);
    $("#wins").text(wins);
    $("#losses").text(losses);

    //set the total and the crystals to random numbers

    grandTotal = getRandomInt(19, 121);
    $("#total").text(grandTotal);

    yellowCrystal = getRandomInt(1, 13);
    greenCrystal = getRandomInt(1, 13);
    redCrystal = getRandomInt(1, 13);
    blueCrystal = getRandomInt(1, 13);

    $("#crystalYellow").val(yellowCrystal);
    console.log($("#crystalYellow").val());

    $("#crystalGreen").val(greenCrystal);
    console.log($("#crystalGreen").val());

    $("#crystalRed").val(redCrystal);
    console.log($("#crystalRed").val());

    $("#crystalBlue").val(blueCrystal);
    console.log($("#crystalBlue").val());
  }

  restartGame()

  //capture user clicks and update values accordingly

  $(".crystal").on("click", function () {
    runningTotal += parseInt($(this).val());  //parseInt prevents concatenation
    $("#current-total").text(runningTotal); 
    
    if (runningTotal > grandTotal) {
      losses++;
      alert("You lost!");
      restartGame();
    }
    else if (runningTotal === grandTotal) {
      wins++;
      alert("You won!");
      restartGame();
    }

    //log all values to console for debugging, can comment later
    console.log("Running total: " + runningTotal);
    console.log("Target total: " + grandTotal);
    console.log("Yellow: " + yellowCrystal);
    console.log("Green: " + greenCrystal);
    console.log("Red: " + redCrystal);
    console.log("Blue: " + blueCrystal);

  })

})