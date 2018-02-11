//Random word selected and exported
var wordsToGuess = ['paella', 'rice', 'tacos', 'tofu', 'marzipan', 'hummus', 'lasagna', 'pizza'];
var randomIndex = Math.floor(Math.random() * wordsToGuess.length);
var randomWord = wordsToGuess[randomIndex];
exports.randomWord = randomWord;