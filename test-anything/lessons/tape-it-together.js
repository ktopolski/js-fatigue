var fancify = require(process.argv[2]);
var test = require('tape');

test('fancify decorates string based on arguments', function (t) {
  t.equals(fancify('Hello'), '~*~Hello~*~', 'without arguments it wraps a string in ~*~');
  t.equals(fancify('Hello', true), '~*~HELLO~*~', 'with second argument being true it also upcases the string');
  t.equals(fancify('Hello', false, '!'), '~!~Hello~!~', 'with third argument being char it replaces * with given char');
  t.end();
})
