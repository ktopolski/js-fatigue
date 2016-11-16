var test = require('tape');
var feedCat = require(process.argv[2]);

test('feedCat accepts any string but \'chocolate\' and returns \'yum\'', function(t) {
  t.plan(2);
  t.equal(feedCat('whiskas'), 'yum');
  t.throws(feedCat.bind(null, 'chocolate'));
});
