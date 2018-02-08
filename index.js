var inquirer = require('inquirer');

var Word = require('./Word')

var wordList = ['WEBSITE', 'JAVASCRIPT', 'PROGRAMMER', 'DATABASE', 'JQUERY', 'ELEMENT'];

var Hangman = function (){
    this.startGame = function () {
        this.guessCount = 10;
        this.nextWord();
        gamePrompt();
    }
    this.nextWord = function () {
        var wordInPlay = wordList[Math.floor(Math.random() * wordList.length)];
        console.log(wordInPlay);
        this.word = new Word(wordInPlay);
        this.word.build();
    }
    // this.gamePrompt = function () {
    //     inquirer.prompt([

    //         {
    //             type: "input",
    //             name: "playerGuess",
    //             message: "Choose a letter"
    //         }

    //     ]).then(function (answer) {
    //         console.log(answer.playerGuess);
    //         this.gamePrompt.word.plyGuess(answer.playerGuess);
    //         this.word.returnValue().join(' ');
    //         this.guessCount--;
    //         console.log(guessCount);
    //         // if (this.word.plyGuess(answer).toUpperCase() === "POST") {
    //         //     postAuction();
    //         // }
    //         // else {
    //         //     bidAuction();
    //         // }
    //     });
    // }
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
        console.log(answer.playerGuess);
        player.word.plyGuess(answer.playerGuess);
        player.word.returnValue().join(' ');
        // this.guessCount--;

        // if (this.word.plyGuess(answer).toUpperCase() === "POST") {
        //     postAuction();
        // }
        // else {
        //     bidAuction();
        // }
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

