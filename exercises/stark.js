class Stark {
  constructor(name, location){
    this.name = name;
    this.safe = false;
    this.location = location;
    if (this.location === undefined) {
      this.location = 'Winterfell';
    } 
    }

    houseWords() {
      if (this.safe === false) {
      return 'Winter is Coming';
      } 
      if (this.safe === true) {
        return 'The North Remembers'
      }

    }
  }



module.exports = Stark;