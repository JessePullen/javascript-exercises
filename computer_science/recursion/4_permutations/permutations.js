const permutations = function (nums) {
  if (nums.length === 0) {
    return [nums];
  }

  let result = [];

  for (let i = 0; i < nums.length; i++) {
    let current = nums[i]
    let remaining = nums.slice(0, i).concat(nums.slice(i + 1))
    let subPermutation = permutations(remaining)

    for (const num of subPermutation) {
      result.push([current, ...num])
    }
  }
  return result
}
  
// Do not edit below this line
module.exports = permutations;
