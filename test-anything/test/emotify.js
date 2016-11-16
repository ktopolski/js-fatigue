var emotify = require('../lib/emotify.js');
var test    = require('tape');

test('emotify adds \':)\' at the end of string', function(t) {
  t.equals(emotify('Hello'), 'Hello :)');
  t.end();
});
