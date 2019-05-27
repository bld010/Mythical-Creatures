class Sphinx {
  constructor() {
  this.name = null;
  this.riddles = [];
  this.heroesEaten = 0
  }


  collectRiddle(riddle){
    this.riddles.push(riddle);
    if (this.riddles.length > 3) {
    this.riddles.shift();
    }
  }

  attemptAnswer(answerGuess) {
    var answerText = answerGuess;
    var object = this.riddles.find(function(arrayItem) {
      return arrayItem.answer === answerGuess; 
    })
    if (object === undefined) {
      this.heroesEaten++;
      return;
    }
    var index = this.riddles.indexOf(object)
    this.riddles.splice(index, 1); 
    if (this.riddles.length === 0){
      return `PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS "${answerGuess}"???`
    }
    return 'That wasn\'t that hard, I bet you don\'t get the next one'      
    }
}

module.exports = Sphinx; 