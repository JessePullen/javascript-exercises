const contains = function (list, word) {
  //base case
  if (list === word) {
    return true;
  }

  // recursive logic
  if (list && typeof list === "object") {
    for (const value of Object.values(list)) {
      if (value === word) {
        return true;
      }
      if (contains(value, word)) {
        return true;
      }
    }
  }
  return false;
};

// Do not edit below this line
module.exports = contains;
