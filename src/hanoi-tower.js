module.exports = function calculateHanoi(disksNumber, turnsSpeedPerHour) {
  let minTurns = Math.pow(2, disksNumber) - 1;
  let turninSecond = turnsSpeedPerHour / (60 * 60);
  let minSec = minTurns / turninSecond;
  return {turns: minTurns,seconds: minSec};
}