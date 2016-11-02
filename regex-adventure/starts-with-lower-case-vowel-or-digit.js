startsWithLowerCaseVowelOrDigit = function(string) {
  return /^([aeiouy]|[0-9])/.test(string);
}

module.exports = startsWithLowerCaseVowelOrDigit 
