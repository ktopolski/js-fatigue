findSeparatedXValue = function(string) {
  var xValues = /\bx=(\d+)\b/.exec(string);
  return xValues ? xValues[1] : null;
};

module.exports = findSeparatedXValue
