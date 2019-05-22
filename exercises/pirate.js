class Pirate {
  constructor(name, job) {
    this.name = name; 
    this.job = job;
    if (this.job === undefined) {
      this.job = 'Scallywag'  
    }
    this.cursed = false;
    this.actsCount = 0;
    this.booty = 0;
  }

  commitHeinousAct() {
    this.actsCount ++
    if (this.actsCount > 2) {
      this.cursed = true;
    }
  }

  robShip() {
    this.booty = 100;
    return 'YAARRR!';
  }
}



module.exports = Pirate