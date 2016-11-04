isVersionedRobotCatOrDog = function(string) {
  return /^(robot|cat|dog)\d+$/.test(string);
}

module.exports = isVersionedRobotCatOrDog
