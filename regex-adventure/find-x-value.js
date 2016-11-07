findXValue = function(string) {
  var xValues = /x=(\d+)/.exec(string);
  return xValues ? xValues[1] : null;
};

module.exports = findXValue
