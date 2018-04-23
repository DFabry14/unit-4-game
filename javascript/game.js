// assign variable names
$(document).ready(function() {
var goalSpan = $("#goal")
var winsSpan = $("#wins");
var lossesSpan = $("#losses");
var totalSpan = $("#total");
var crystal1 = $("#crystal1");
var crystal2 = $("#crystal2");
var crystal3 = $("#crystal3");
var crystal4 = $("#crystal4");

// set inital numbers to 0
var wins = 0;
var losses = 0;
var total = 0;

totalSpan.text(total);
winsSpan.text(wins);
lossesSpan.text(losses);

// generate goal number
var goal = Math.floor(Math.random() * 101) + 19;
console.log(goal);

goalSpan.text(goal);

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
$("#crystal1").on("click", function() {
    total += crystal1;
    totalSpan.text(total);
})

$("#crystal2").on("click", function() {
    total += crystal2;
    totalSpan.text(total);
})

$("#crystal3").on("click", function() {
    total += crystal3;
    totalSpan.text(total);
})

$("#crystal4").on("click", function() {
    total += crystal4;
    totalSpan.text(total);
})

// check to see if total is the same or more than the goal
$(".crystals").on("click", function() {
    if (total === goal) {
        wins++;
        winsSpan.text(wins);
        reset();
    }
    else if (total > goal) {
        losses++;
        lossesSpan.text(losses);
        reset();
    }
})

// add win/loss and reset goal and crystal values

function reset() {
    total=0;
    totalSpan.text(total);
    crystal1 = Math.floor(Math.random() * 12) + 1;
    crystal2 = Math.floor(Math.random() * 12) + 1;
    crystal3 = Math.floor(Math.random() * 12) + 1;
    crystal4 = Math.floor(Math.random() * 12) + 1;
    goal = Math.floor(Math.random() * 101) + 19;
    goalSpan.text(goal);
}

})