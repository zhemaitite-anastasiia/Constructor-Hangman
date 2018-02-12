var game = require("./game.js");
var wordCons = require("./word.js");
var letterCons = require("./letter.js");
var inquirer = require("inquirer");
var validator = require('validator');
var randomWord = game.randomWord;
var letterGuess;
exports.letter;


var myWord = new wordCons.wordCons(game.randomWord);
var maxGuesses = 10;

function takeGuess() {
    console.log(myWord.toString());
    if (myWord.guessesMade.length >= maxGuesses) {
        console.log("No more guessses left");
        return;
    }
    inquirer.prompt([{
        name: 'letter',
        type: 'text',
        message: 'Guess a letter: ',

    }]).then(function(letterInput) {
        var letter = letterInput.letter;
        myWord.findLetter(letter);
        if (myWord.isComplete()) {
            console.log("You are right! It was " + myWord.toString() + "!");
            return;
        }
        console.log('-------------------------------------------------------------------------\n');
        console.log('You have ' + (maxGuesses - myWord.guessesMade.length) + ' guesses left.')


        takeGuess();
    })


}

takeGuess();