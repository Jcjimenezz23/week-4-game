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

// Helper Function for getting random numbers
var getRandom = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

