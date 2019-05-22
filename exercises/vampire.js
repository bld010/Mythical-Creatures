class Vampire {
  constructor(name, pet){
    this.name = name;
    this.pet = pet;
    if (this.pet === undefined) {
          this.pet = 'bat'
    }
    this.thirsty = true;
  }
  drink(){
    this.thirsty = false;
  }
}

module.exports = Vampire;