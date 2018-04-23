// assign variable names
var goalSpan = document.getElementById("goal")
var winsSpan = document.getElementById("wins");
var lossesSpan = document.getElementById("losses");
var totalSpan = document.getElementById("total");
var crystal1 = document.getElementsByClassName("crystal1");
var crystal2 = document.getElementsByClassName("crystal2");
var crystal3 = document.getElementsByClassName("crystal3");
var crystal4 = document.getElementsByClassName("crystal4");

// set inital numbers to 0
var wins = 0;
var losses = 0;
var total = 0;

// generate goal number
var goal = Math.floor(Math.random() * 101) + 19;
console.log(goal);

// generate number 1-12 for the crystal buttons
var crystal1 = Math.floor(Math.random() * 12) + 1;
console.log(crystal1);
var crystal2 = Math.floor(Math.random() * 12) + 1;
console.log(crystal2);
var crystal3 = Math.floor(Math.random() * 12) + 1;
console.log(crystal3);
var crystal4 = Math.floor(Math.random() * 12) + 1;
console.log(crystal4);

// add numbers together when crystal buttons are clicked


// check to see if total is the same or more than the goal


// add win/loss and reset goal and crystal values