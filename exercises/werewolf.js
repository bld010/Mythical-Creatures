class Werewolf {
  constructor(name, location) {
    this.name = name;
    this.location = location;
    this.human = true;
    this.wolf = false;
    this.changeCount = 0;
    this.hungry = false;
    }
  change() {
    this.changeCount += 1;
    if (this.changeCount % 2 === 0) {
      this.human = true;
      this.wolf = false;
      this.hungry = false;
    } else {
      this.human = false;
      this.wolf = true;
      this.hungry = true;
    }
  }
    eat(victim) {
       if (this.hungry === true && this.human === false) {
        victim.alive = false;
        this.human = true;
        this.wolf = false;
       } else {
        return
       }
      
      
    }
  }



module.exports = Werewolf