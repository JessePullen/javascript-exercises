const ftoc = function(fTemp) {
  let temp = (fTemp - 32) * 5/9;
  return round(temp);
};

const ctof = function(cTemp) {
  let temp = (cTemp * 9/5) + 32
  return round(temp);
};

const round = function(num) {
  return Math.round(num * 10) / 10;
}

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
