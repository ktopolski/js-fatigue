startsNotWithDigitFollowedByUpcasedLetter = function(string) {
  return /^\D[^A-Z]/.test(string);
}

module.exports = startsNotWithDigitFollowedByUpcasedLetter
