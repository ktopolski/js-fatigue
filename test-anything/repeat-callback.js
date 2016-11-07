var repeatCallback = function(times, callback) {
  for(var i = 0; i < times; i++) callback();
}

module.exports = repeatCallback
