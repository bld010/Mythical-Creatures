class Sphinx {
  constructor() {
  this.name = null;
  this.riddles = [];
  this.heroesEaten = 0;
  }


  collectRiddle(riddle){
    this.riddles.push(riddle);
    if (this.riddles.length > 3) {
    this.riddles.shift();
    }
  }

  attemptAnswer(answerGuess) {
    var answerIndex = this.riddles.indexOf(function(arrayItem) {
      return arrayItem.answer == answerGuess;
    })  
    this.riddles.splice(answerIndex, 1)
    return 'That wasn\'t that hard, I bet you don\'t get the next one'
  }

}

module.exports = Sphinx; 