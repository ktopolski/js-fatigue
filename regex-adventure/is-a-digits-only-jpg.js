isADigitsOnlyJPG = function(filename) {
  return /^\d+\.(jpg|jpeg)$/.test(filename);
}

module.exports = isADigitsOnlyJPG
