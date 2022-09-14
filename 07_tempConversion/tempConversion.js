const ftoc = function(tempf) {
  return Math.round(((tempf-32)/1.8)*10)/10;
};

const ctof = function(tempc) {
  return Math.round((tempc*1.8+32)*10)/10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
