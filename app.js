var sequence = [];

var testButton = document.getElementById("test-button");
var testFunction = function() {
	var oneToFour = getRandomInt(1,4);
	sequence.push(oneToFour);
	console.log(sequence);
};
testButton.addEventListener("click", testFunction);




//http://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
