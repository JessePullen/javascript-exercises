const pascal = function (n) {
  if (n <= 0) {
    return [];
  }
  // base case
  if (n === 1) {
    return [1];
  }

  let result = [];
  let prev = pascal(n - 1);

  result.push(1);

  for (let i = 0; i < prev.length - 1; i++) {
    result.push(prev[i] + prev[i + 1]);
  }

  result.push(1);
  return result;
};

// Do not edit below this line
module.exports = pascal;
