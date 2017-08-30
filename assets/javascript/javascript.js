//setting variables
var crystal = {
  blue:
  {
    name: "Blue",
    value: 0
  },
  green:
  {
    name: "Green",
    value: 0
  },
  red:
  {
    name: "Red",
    value: 0
  },
  yellow:
  {
    name: "Yellow",
    value: 0
  }
};

// setting scores
var currentScore = 0;
var targetScore = 0;

// Wins and Losses
var winCount = 0;
var lossCount = 0;


//Functions

var getRandom = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Starts and restarts the game
var startGame = function() {

  // Reset the score
  currentScore = 0;

  // Set a new target score
  targetScore = getRandom(19, 120);

  // Set different values for each of the crystals
  crystal.blue.value = getRandom(1, 12);
  crystal.red.value = getRandom(1, 12);
  crystal.green.value = getRandom(1, 12);
  crystal.yellow.value = getRandom(1, 12);

  $("#your-score").html(currentScore);
  $("#target-score").html(targetScore);


  // Testing Console
  console.log("-----------------------------------");
  console.log("Target Score: " + targetScore);
  console.log("Blue: " + crystal.blue.value + " | Green: " + crystal.green.value + " | Red: " + crystal.red.value +
    " | Yellow: " + crystal.yellow.value);
  console.log("-----------------------------------");
};

var checkWin = function() {

  if (currentScore > targetScore) {
    alert("Sorry. You lost!");
    console.log("You Lost");

    // add to loss Counter
    lossCount++;

    $("#loss-count").html(lossCount);

    startGame();
  }

  else if (currentScore === targetScore) {
    alert("Congratulations! You Won!");
    console.log("You Won!");

    // Add to the win counter
    winCount++;

    $("#win-count").html(winCount);

    startGame();
  }

};

// Respond to clicks on the crystals
var addValues = function(clickedCrystal) {

  // Change currentScore
  currentScore += clickedCrystal.value;

  // Change the HTML to reflect changes in currentScore
  $("#your-score").html(currentScore);

  // Call the checkWin Function
  checkWin();

  // Testing Console
  console.log("Your Score: " + currentScore);
};


