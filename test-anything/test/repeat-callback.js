var repeatCallback = require('../lib/repeat-callback.js');
var test           = require('tape');

var n = 4;

test('repeatCallback repeats callback cb n times', function(t) {
  t.plan(n);
  repeatCallback(n, function() {
    t.pass('callback called');
  });
});
