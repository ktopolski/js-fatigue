var feedCat = function(food) {
  if(food == 'chocolate')
    throw new Error('chocolate is harmful to cats!');
  else
    return 'yum';
};

module.exports = feedCat
