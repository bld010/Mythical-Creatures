class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];

  }

  stare(victim) {
    if (this.statues.length >= 3) {
      this.statues[0].stoned=false;
      this.statues.shift();
      this.statues.push(victim);
      this.statues[2].stoned = true;
    } else {
    this.statues.push(victim);
    this.statues[this.statues.length-1].stoned = true;
  }
  }
}


 
module.exports = Medusa;

