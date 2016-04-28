var sequence = [];

var step = 0;

var oneButton = document.getElementById("one-button");
var twoButton = document.getElementById("two-button");
var threeButton = document.getElementById("three-button");
var fourButton = document.getElementById("four-button");

var buttons = [oneButton, twoButton, threeButton, fourButton];

var compareInput = function(number) {
	var currentStep = sequence[step];
	if(number == currentStep) {		
		if(step + 1 == sequence.length) { //Are you at the end of the sequence, winning the round?
			step = 0; //restart player's sequence
			addStep();	// Instructions grow by 1
		} else {
			step++; //If not, move to the next instruction
		}		
	} else {		
		step = 0;
		sequence = [];
		addStep();
	}
	console.log(sequence);
};

for (var i = 1; i < 5; i++ ) {
	var button = buttons[i - 1];
	(function(num) {
		button.addEventListener("click", function() {
			compareInput(num);
		});
	})(i);
}

//http://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
var getRandomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

var addStep = function() {
	sequence.push(getRandomInt(1,4));
};

addStep(); //game starts with 1 instruction
console.log(sequence);

//todo: game starting function 