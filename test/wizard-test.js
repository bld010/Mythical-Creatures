var assert = require('chai').assert;
var Wizard = require('../exercises/wizard');

describe('Wizard', function() {

  it('should be a function', function() {
    assert.isFunction(Wizard);
  });

  it('should have a name', function() {
    var wizard = new Wizard({name: 'Jhun'});
    assert.equal(wizard.name, 'Jhun');
  });

  it('should have a beard by default', function() {
    var wizard = new Wizard({name: 'Jhun'});
    assert.equal(wizard.bearded, true);
  });

  it('should not always be bearded', function() {
    var wizard = new Wizard({name: 'Jhun', bearded: false});
    assert.equal(wizard.bearded, false)
  });

  it('should have root powers', function() {
    var wizard = new Wizard({name: 'Jhun', bearded: false});
    assert.equal(wizard.incantation('chown lumos'), 'CHOWN LUMOS');
  });

  it.skip('should has lots of root powers', function() {
    var wizard = new Wizard({name: 'Jhun', bearded: false});
    assert.equal(wizard.incantation('Expecto Patronum'), 'EXPECTO PATRONUM');
  });

  it.skip('should start rested', function() {
    // create wizard
    var wizard = new Wizard({name: 'Jhun', bearded: false});
    assert.equal(wizard.isRested(), true);
    // assert isRested returns true
  });

  it.skip('should be able to cast spells', function() {
    // create wizard
    var wizard = new Wizard({name: 'Jhun', bearded: false});
    assert.equal(wizard.cast(), 'MAGIC BULLET');
    // assert wizard.cast() returns 'MAGIC BULLET'
  });

  it.skip('should only be able to cast 3 spells', function() {
    var wizard = new Wizard({name: 'Jhun', bearded: false});

    // create wizard
    assert.equal(wizard.isRested(), true);
    // assert isRested is true
    assert.equal(wizard.cast(), 'MAGIC BULLET');
    // cast()
    assert.equal(wizard.isRested(), true);
    // assert isRested is true
    assert.equal(wizard.cast(), 'MAGIC BULLET');
    // cast()
    assert.equal(wizard.isRested(), true);
    // assert isRested is true
    assert.equal(wizard.cast(), 'MAGIC BULLET');
    // cast()
    assert.equal(wizard.isRested(), false);
    // assert isRested is false
    assert.equal(wizard.cast(), "I SHALL NOT CAST!")
    // assert cast() returns 'I SHALL NOT CAST!'
  });
});
