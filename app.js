var sequence = [];

var step = 0;

var colorHack = {
	1: "47AD32",
	2: "EB7575",
	3: "FFFA66",
	4: "66BAFF",
};

var Button = function(domElementId, value, sound) {
	var rootScope = this;
    this.domElement = document.getElementById(domElementId);
    this.value = value;
    this.sound = sound;
    this.flashColor = colorHack[this.value];
    this.beep = new Audio(this.sound);
    this.domElement.addEventListener("click", function() {
    	rootScope.lightUp();
		compareInput(rootScope.value);
	});
};

Button.prototype.lightUp = function() {
	var buttonDom = this.domElement;
	buttonDom.setAttribute("style", "background-color: #" + this.flashColor);
	setTimeout(function(){ 
		buttonDom.setAttribute("style", ""); 
	}, 500);
	this.beep.play();
};

var oneButton = new Button("one-button", 1, "https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");
var twoButton = new Button("two-button", 2, "https://s3.amazonaws.com/freecodecamp/simonSound2.mp3");
var threeButton = new Button("three-button", 3, "https://s3.amazonaws.com/freecodecamp/simonSound3.mp3");
var fourButton = new Button("four-button", 4, "https://s3.amazonaws.com/freecodecamp/simonSound4.mp3");

var buttons = [oneButton, twoButton, threeButton, fourButton];
var lightUpInstructions = function(sequence) {
	var clonedSequence = sequence.slice();
	var instructionInterval = setInterval(function() {
		var currentButton = buttons[clonedSequence.shift() - 1];// sequence is 1 to 4, array is 0 to 3
		currentButton.lightUp();
		if (!clonedSequence.length) clearInterval(instructionInterval);
	}, 1000);
};

var compareInput = function(number) {
	var currentStep = sequence[step];
	if(number == currentStep) {		
		if(step + 1 == sequence.length) { //Are you at the end of the sequence, winning the round?
			step = 0; //restart player's sequence
			addStep();	// Instructions grow by 1
			lightUpInstructions(sequence);
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

var startGame = function() {
	sequence = [];
	step = 0;
	addStep(); //game starts with 1 instruction
	console.log(sequence);
	lightUpInstructions(sequence);
};

document.getElementById("start-button").addEventListener("click", function() {
	startGame();
});