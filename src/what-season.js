module.exports = function getSeason( date ) {
 // throw 'Not implemented';
  // remove line with error and write your code here

  if (!date) {
		return "Unable to determine the time of year!";
  }
  for (let d in date) {
		if (date.hasOwnProperty(d)) {
			throw new Error();
		}
  }
  
  let res = date.getMonth();
  if(res <= 1 || res === 11) return 'winter';
  if(res <= 4) return 'spring';
  if(res <= 7) return 'summer';
  if(res <= 10) return 'autumn';

};
