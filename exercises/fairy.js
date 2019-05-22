class Fairy {
  constructor(name) {
  this.name = name;
  this.dust = 10;
  this.disposition = 'Good natured';
  this.clothes = {
    dresses: ['Iris']
  }
  this.humanWards = []
  }

  provoke() {
    this.disposition = 'Vengeful'
  }

  replaceInfant(infantObject) {
   
    if (this.disposition === 'Vengeful') {
    infantObject.disposition = 'Malicious';
    this.humanWards.push(infantObject);
    } else {
      return infantObject;
    }
     if (this.humanWards.length > 2) {
      this.disposition = 'Good natured';
    }
  }

  receiveBelief() {
    this.dust += 1;
  }

  believe() {
    this.dust += 10;
  }

  makeDresses(flowerArray){
    for (var i = 0; i < flowerArray.length; i++) {
    this.clothes.dresses.push(flowerArray[i]);
  }
  }
}

module.exports = Fairy;