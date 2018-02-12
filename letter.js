console.log('inside of letter.js')
exports.letter = letter;

function letter(value) {
	this.value = value;
	this.show = false;
	if (this.value == ' ')
		this.show = true;
}

letter.prototype.printInfo = function(){
	if (this.show) {
		return this.value;
	}
	return "_";
}