var Year = function() {};

Year.prototype.isLeap = function(year) {

  if ((year%100 === 0 && year%400 === 0) && (year%4 === 0)) {
    return true;
  } else {
  	return false;
  }
};

module.exports = Year;
