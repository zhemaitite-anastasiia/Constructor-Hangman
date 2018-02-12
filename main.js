var game = require("./game.js");
var wordCons = require("./word.js");
var letterCons = require("./letter.js");
var inquirer = require("inquirer");
var validator = require('validator');
var randomWord = game.randomWord;
var letterGuess;
exports.letter;
console.log('inside of main.js')

var myWord = new wordCons.wordCons(game.randomWord);
var maxGuesses = 10;

function takeGuess(){
	console.log(myWord.toString());
	if (myWord.guessesMade.length >= maxGuesses){
		console.log("No more guessses left");
		return;
	}
	inquirer.prompt([{
		name: 'letter',
		type: 'text',
		message: 'Enter letter: ',
		//validate: function{}
	}]).then(function(letterInput){ 
		var letter = letterInput.letter;
		myWord.findLetter(letter);
		if (myWord.isComplete()){
			console.log("It was " + myWord.toString() + "!");
			return;
		}
		console.log('-----------\n');
		console.log('You have ' + (maxGuesses - myWord.guessesMade.length) + ' guesses left.')

		//console.log(letterInput)
		//if(validator.isAlpha(letterInput.letter) && letterInput.letter.length === 1){
			console.log('its just one letter!')
			takeGuess();
		}) //else {
			//console.log('please, one letter at a time')
			//takeGuess();
		
	
}

takeGuess();