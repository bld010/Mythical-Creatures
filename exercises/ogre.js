class Ogre {
  constructor(name, home) {
    this.name = name
    this.home = home || 'Swamp';
    this.swings = 0;
  }
   encounter(humanObject) {
    humanObject.encounterCounter++;
  if (humanObject.encounterCounter % 3 === 0) {
    this.swingAt(humanObject);
  }
}

  swingAt(humanObject) {
      this.swings++;
      if (this.swings % 2 === 0){
        humanObject.knockedOut = true;
      }
    }

  apologize(humanObject) {
    humanObject.knockedOut = false;
  }
}



module.exports = Ogre;