module.exports = function getSeason(date) {
  if (date === undefined)  {
    return 'Unable to determine the time of year!';
  }
  if(date.hasOwnProperty('getMonth')) {
    throw new Error();
  } else {
    const whatMonth = date.getMonth();
     if(whatMonth === 11 || whatMonth === 0 || whatMonth === 1) {
       return 'winter';
     }
     if(whatMonth === 4 || whatMonth === 2 || whatMonth === 3) {
      return "spring";
    }
    if(whatMonth === 5 || whatMonth === 6 || whatMonth === 7) {
      return "summer";
    } else return 'autumn';
    
  } 
};
