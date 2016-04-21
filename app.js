var sequence = [];

var step = 0;

var testButton = document.getElementById("test-button");
var testFunction = function() {
	addStep();
	console.log(sequence);
	//console.log(step);
	console.log(sequence[step]);
	step++;
};
testButton.addEventListener("click", function(){
	testFunction();
});

var oneButton = document.getElementById("one-button");
var twoButton = document.getElementById("two-button");
var threeButton = document.getElementById("three-button");
var fourButton = document.getElementById("four-button");

var buttons = [oneButton, twoButton, threeButton, fourButton];

var getInput = function(number) {
	console.log(number);
};

for (var i = 1; i < 5; i++ ) {
	var button = buttons[i - 1];
	(function(num) {
		button.addEventListener("click", function() {
			getInput(num);
		});
	})(i);
}

var addStep = function() {
	sequence.push(getRandomInt(1,4));
};

//http://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
var getRandomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};