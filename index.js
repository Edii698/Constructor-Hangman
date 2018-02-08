var inquirer = require('inquirer');

var Word = require('./Word')

var wordList = ['WEBSITE', 'JAVASCRIPT', 'PROGRAMMER', 'DATABASE', 'JQUERY', 'ELEMENT'];
var gameCount = 10;
var Hangman = function (){
    this.startGame = function () {
        this.nextWord();
        gamePrompt();
    }
    this.nextWord = function () {
        var wordInPlay = wordList[Math.floor(Math.random() * wordList.length)];
        console.log(wordInPlay);
        this.word = new Word(wordInPlay);
        this.word.build();
    }
    
}

var player = new Hangman();
player.startGame()
// var newGuess;
// console.log(player.word.plyGuess);
function gamePrompt() {
    inquirer.prompt([

        {
            type: "input",
            name: "playerGuess",
            message: "Choose a letter"
        }

    ]).then(function (answer) {
        var ltrGues = answer.playerGuess.toUpperCase();
        player.word.plyGuess(ltrGues);
        console.log(player.word.returnValue().join(' '));
        gameCount--;
        console.log("Guesses letf: " + gameCount);
        if (gameCount > 0){
            gamePrompt();
        }
     
    });
}

 

// console.log(player.word);
// console.log(player.word.build());
// console.log(player.word.aryLetters);
// console.log(player.word.plyGuess('E'));
// console.log(player.word.returnValue());
// console.log(player.guessCount);
// console.log(player.word.plyGuess('A'));
// console.log(player.word.returnValue().join(' '));

