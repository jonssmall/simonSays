var sequence = [];

var step = 0;

var Button = function(domElementId, value, sound) {
	var rootScope = this;
    this.domElement = document.getElementById(domElementId);
    this.value = value;
    this.sound = sound;
    this.beep = new Audio(this.sound);
    this.domElement.addEventListener("click", function() {
		rootScope.beep.play();
		compareInput(rootScope.value);
	});
};

var oneButton = new Button("one-button", 1, "https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");
var twoButton = new Button("two-button", 2, "https://s3.amazonaws.com/freecodecamp/simonSound2.mp3");
var threeButton = new Button("three-button", 3, "https://s3.amazonaws.com/freecodecamp/simonSound3.mp3");
var fourButton = new Button("four-button", 4, "https://s3.amazonaws.com/freecodecamp/simonSound4.mp3");

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