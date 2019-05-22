class Direwolf{
  constructor(name, home, size){
    this.name = name;
    this.home = home;
    this.size = size;
    this.huntsWhiteWalkers = true;
    if (this.size === undefined) {
      this.size = 'Massive';
    }
    if (this.home === undefined) {
    this.home = 'Beyond the Wall';
    }
    this.starksToProtect = [];
  }

  protect(starkObject) {
    if (this.starksToProtect.length > 1) {
      return;
    }
    if (this.home === starkObject.location) {
      this.starksToProtect.push(starkObject);
      starkObject.safe = true;
      this.huntsWhiteWalkers = false;
    } else {
      return
    }    
  }

  leave(starkObject) {
    this.starksToProtect.pop();
    starkObject.safe = false;
  }

}

module.exports = Direwolf