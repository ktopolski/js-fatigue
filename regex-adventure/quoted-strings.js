quotedStrings = function(string) {
  // My original solution was /"(\w|\s)*"/g, but it does not check for symbols
  return string.match(/"[^"]*"/g);
}

module.exports = quotedStrings
