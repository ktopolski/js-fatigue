var isCoolNumber = require('../lib/is-cool-number.js');
var test         = require('tape');

test('isCoolNumber checks if number equals 42', function(t) {
  t.ok(isCoolNumber(42));
  t.notOk(isCoolNumber(41));
  t.end();
});
