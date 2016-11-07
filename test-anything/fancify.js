var fancify = function(string, shouldUpcase, fancyChar) {
  var fancyChar       = fancyChar || '*';
  var fancyTag        = '~' + fancyChar + '~';
  var fancifiedString = fancyTag + string + fancyTag;
  var result          = shouldUpcase ? fancifiedString.toUpperCase() : fancifiedString;

  return result;
};

module.exports = fancify
