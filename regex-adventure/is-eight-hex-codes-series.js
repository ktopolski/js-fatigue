isEightHexCodesSeries = function(string) {
  return /^(0x[a-fA-F0-9]{2}\s+){8}$/.test(string);
}

module.exports = isEightHexCodesSeries
