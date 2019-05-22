class Centaur {
  constructor(name, breed){
    this.name = name;
    this.breed = breed;
    this.cranky = false;
    this.standing = true;
    this.layingDown = false;
    this.bowShots = 0
  }

  shoot() {
    this.bowShots += 1;
    if (this.bowShots > 2) {
      this.cranky = true;
    }
    if (this.cranky === true || this.layingDown === true) {
      return 'NO!'
    } else {
    return 'Twang!!!'
  }
  }



  run() {
    if (this.layingDown === true) {
      return 'NO!'
    } else {
    this.cranky = true;
    return 'Clop clop clop clop!!!';
  }
  }

  sleep() {
    if (this.standing === true) {
      return 'NO!';
    } 
    if (this.layingDown === true) {
      this.cranky = false;
      this.bowShots = 0;
      return 'ZZZZ';
    }
  }

  layDown() {
    this.standing = false;
    this.layingDown = true;
  }

  standUp() {
    this.standing = true;
    this.layingDown = false;
  }

  drinkPotion() {
    if (this.cranky === false) {
      this.cranky = true;
      return
    }

    if (this.standing === true) {
      this.cranky = false;
      
    } else {
      return 'Not while I\'m laying down!'
    }
  }
  
}

module.exports = Centaur
