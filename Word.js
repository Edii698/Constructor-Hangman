var Letter = require("./Letter");

function Word(gWord) {
    this.gWord = gWord,
    this.build = function () {
            // var objWord =;
            for (var i = 0; i < gWord.length; i++) {
                this.aryLetters.push(new Letter(gWord[i]));
            }
        }
    this.aryLetters = [];
    this.plyGuess = function (guess) {
        for (var x = 0; x < this.aryLetters.length; x++) {
            this.aryLetters[x].switch(guess);
        }
    }
    this.returnValue = function () {
        return this.aryLetters.map((letterObj) => {

            return letterObj.display();
        })
    }
}

module.exports = Word;
