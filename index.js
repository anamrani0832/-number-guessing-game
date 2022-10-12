"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
console.log("welcome to the number guessing game");
// tell them to guess within a range of numbers
console.log("Guess a number between 1 and 10");
// random number generate
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}
var randomNum = getRandomInt(1, 11);
// # get the guess
var guessNumber = parseInt((0, readline_sync_1.question)("Enter a number to guess:  "));
while (guessNumber != randomNum) {
    // if guess is lower number
    if (guessNumber < randomNum) {
        console.log("Your Guess is lower");
    }
    //  if the guess is higher
    else if (guessNumber > randomNum) {
        console.log("Your Guess is Higher");
    }
    guessNumber = parseInt((0, readline_sync_1.question)("Enter again a number to guess:  "));
}
if (guessNumber == randomNum) {
    console.log("You got it right");
}
else {
    console.log("You got it wrong");
}
