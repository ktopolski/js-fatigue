var isCoolNumber = require('../lib/is-cool-number.js');
var assert       = require('assert');
var test         = require('tape');

var coolNumber    = 42;
var notCoolNumber = 0;

test('it wraps nodejs asserts', function(t) {
  t.doesNotThrow(assert.equal.bind(null, isCoolNumber(coolNumber), true, coolNumber + ' is cool number!'));
  t.doesNotThrow(assert.equal.bind(null, isCoolNumber(notCoolNumber), false, notCoolNumber + ' is not cool number!'));
  t.throws(assert.equal.bind(null, isCoolNumber(notCoolNumber), true));
  t.end();
});
