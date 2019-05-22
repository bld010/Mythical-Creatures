class Dragon {
  constructor(name, rider, color) {
    this.name = name; 
    this.rider = rider;
    this.color = color;
    this.eatCount = 0;
    this.hungry = true;
  }
  eat() {
    this.eatCount = this.eatCount + 1; 
    if (this.eatCount > 2) {
      this.hungry = false;
    }
  }
}

module.exports = Dragon