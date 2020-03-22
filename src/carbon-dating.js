const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
 // throw 'Not implemented';
  // remove line with error and write your code here
  if (typeof sampleActivity !== "string") return false;


	const res = Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) / (0.693 / HALF_LIFE_PERIOD) ;
	
	if (res < 0 || !isFinite(res)) return false;
 
	return Math.ceil(res);
};
