class Wizard {
  constructor(wizardObject) {
    this.name = wizardObject.name;
    this.bearded = true;
    if (wizardObject.bearded !== undefined) {
      this.bearded = wizardObject.bearded;
    }
  }
  incantation(message) {
    message.toUppercase();
  }
}

module.exports = Wizard

