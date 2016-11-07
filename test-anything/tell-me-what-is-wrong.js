var isCoolNumber = require(process.argv[2]);
var coolNumber = 42;
var assert = require('assert');

assert.equal(isCoolNumber(coolNumber), true, '42 is cool number!');
