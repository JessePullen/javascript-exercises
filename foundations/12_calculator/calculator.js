const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  total = 0;

  let aLen = array.length;

  for (let i  = 0;  i < aLen; i++) {
    total += array[i];
  }

  return total;
};

const multiply = function(array) {
  let aLen = array.length;

  total = array[0];

  for (let i  = 1;  i < aLen; i++) {
    total *= array[i];
  }

  return total;
};

const power = function(a, b) {
  return a ** b;
};

const factorial = function(num) {
  if (num === 0 || num === 1) {
    return 1;
  }

  let total = num;

  for (i = num - 1; i > 0; i--) {
    total *= i;
    num--
  }

  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
