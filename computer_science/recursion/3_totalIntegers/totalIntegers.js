const totalIntegers = function (list) {
  let total = 0;

  const newList = Object.values(list);

  for (const value of newList) {
    if (typeof value === "number") {
      total++;
    }

    if (typeof value === "object") {
      total += totalIntegers(value);
    }
  }

  return total;
};

// Do not edit below this line
module.exports = totalIntegers;
