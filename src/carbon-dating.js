const MODERN_ACTIVITY= 15; //C 
const HALF_LIFE_PERIOD= 5730;  //14C
                               //sampleActivity C0

                             
module.exports = function dateSample(sampleActivity) {
  let sample = parseFloat(sampleActivity);
  let activity = Math.log(MODERN_ACTIVITY / sample);
  if (activity < 0 || isNaN(activity) || sample === 0 || typeof sampleActivity !== 'string' ) {
    return false;
  }
  return parseInt(activity / ( 0.693 / HALF_LIFE_PERIOD) + 1);
};
