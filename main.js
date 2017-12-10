var inquirer = require('inquirer');


inquirer.prompt([
	{
		type: "list",
		name: "confirm",
		message: "Would you like to play hangman?",
		choices: ["Yes","No"]
	}
]).then(function(client) {
	if (client.confirm === "Yes") {
		console.log("\n======================================================")
		console.log("Ok! Get Ready To Play!");
		startHangMan();
	} else if (client.confirm === "No") {
	console.log("Ok, we'll play another time.");
	}
});
// "drpepper", "rootbeer", "creamsoda", "gingerale", "mountaindew", "sprite", "redbull", "pepsi", "powerade"
var gameWord = ["coke"];
	var compWord = ""; // blank array to hold the word
	var lettersinWord = []; //
	var numBlanks = 0; 
	var blanks = []; // holds blanks and successful guesses
	var wrongLetters = [];

//	Game Counters

	var guessesLeft = 10;
	var winCount = 0;
	var lossCount = 0;

function startHangMan() {
	// console.log("startHangMan function is being called!");
	compWord = gameWord[Math.floor(Math.random() * gameWord.length)]; // randomly generate word from gameWord array.
	lettersInWord = compWord.split(""); // .split method splits a string into an array of substrings.
	numBlanks = lettersInWord.length; // specifies number of letters that was randomly generated above, # of blanks required for that word.
	
	// RESET key variables to run each successive round of the game. 
	guessesLeft = 10;
	wrongLetters = [];
	blanks = [];

	//	Populate blanks and Successes with the right number of blanks.
	for (var i=0; i<numBlanks; i++) {
		blanks.push("_"); // .push method adds a new item to an Array.
	}

	//	Change HTML to reflect round conditions.
	// document.getElementById("wordToGuess").innerHTML = blanks.join("  ");
	// document.getElementById("numGuesses").innerHTML = guessesLeft;
	// document.getElementById("winCounter").innerHTML = winCount;
	// document.getElementById("lossCounter").innerHTML = lossCount;
	// document.getElementById("youWon").innerHTML = " ";
	// document.getElementById("wrongGuesses").innerHTML = " ";
	// Testing / Debugging
	console.log("\n======================================================")
	console.log("You have: " + guessesLeft + " guesses left.");
	// console.log(compWord);
	// console.log(lettersInWord);
	// console.log(numBlanks);
	console.log(blanks.join("  "));
	userPlay();
}

function userPlay() {

	inquirer.prompt([
		{
			type: "input",
			name: "letters",
			message: "Guess a letter!"

		}

		]).then(function(answers) {
			var isLetterInWord = false;
	for (var i=0; i<numBlanks; i++) {
		if(compWord[i] == answers.letters) {
			isLetterInWord = true;

		}
	}

	// Check where in the word the Letter exists, then populate the blanks array.
	if(isLetterInWord) {
		for (var i=0; i<numBlanks; i++) {
			if(compWord[i] == answers.letters) {
				blanks[i] = answers.letters;
			}
		}
	}
	//letter wasn't found
	else {
		wrongLetters.push(answers.letters);
		guessesLeft--;
	}

	// Testing and Debugging
	console.log(blanks.join(" "));
		
	})
		
};


// function checkLetters(letter) {
// 	//Check if letter exists in code at all

// 	var isLetterInWord = false;
// 	for (var i=0; i<numBlanks; i++) {
// 		if(compWord[i] == letter) {
// 			isLetterInWord = true;

// 		}
// 	}

// 	// Check where in the word the Letter exists, then populate the blanks array.
// 	if(isLetterInWord) {
// 		for (var i=0; i<numBlanks; i++) {
// 			if(compWord[i] == letter) {
// 				blanks[i] = letter;
// 			}
// 		}
// 	}
// 	//letter wasn't found
// 	else {
// 		wrongLetters.push(letter);
// 		guessesLeft--;
// 	}

// 	// Testing and Debugging
// 	console.log(blanks.join(" "));

// }

// function roundComplete() {
// 	console.log("Win Count: " + winCount + " | Loss Count: " + lossCount + " | Guesses Left: " + numGuesses);

// 	//Update the HTML to reflect the most recent information
// 	console.log("You have: " + guessesLeft + "guesses left.");
// 	// document.getElementById("wordToGuess").innerHTML = blanks.join(" ");
// 	console.log("Letters you have guessed that are wrong: " + wrongLetters.join(""));


// 	//Check if the User won.
// 	if (lettersinWord.toString() == blanks.toString()) {
		
// 		winCount++;
		
// 		console.log(blanks.join(" "));
		
// 		//Update the win Counner in the HTML
// 		console.log("You have won a total of: " + winCount + " times.");

// 		setTimeout(startGame, 1500);
// 		console.log("YOU WON HOMIE!");
// 	}

// 	else if (guessesLeft == 0) {
// 		lossCount++;
// 		console.log("=========================================")
// 		console.log(blanks);
// 		console.log("You ran out of guesses, and LOST!");

// 		//Update the 
// 		console.log("You have lost a total of: " + lossCount + " times.");

// 		startHangMan();
// 	}
// }


// MAIN PROCESS 
// =========================================================================================================




// Register Key Clicks
// document.onkeyup = function(event) {
// 	var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
// 	checkLetters(letterGuessed);
// 	roundComplete();

// 	//Testing and Debugging
// 	console.log(letterGuessed);

// } 