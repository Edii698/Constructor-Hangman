function Letter(plyLetter) {

    this.value = plyLetter,
        this.isGuessed = false,
        this.display = function () {
            if (!this.isGuessed) {
                return '_';
            } else {
                return this.value;
            }
        }
    this.switch = function (guess) {
        if (guess == this.value) {
            this.isGuessed = true;
        }
    }
}

module.exports = Letter;