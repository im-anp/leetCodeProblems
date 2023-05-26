var maxProduct = function(nums) {
  let max = nums[0];
  let min = nums[0];
  let result = nums[0];

  for (let i = 1; i < nums.length; i++) {
  const tempMax = max;
  max = Math.max(nums[i], nums[i] * max, nums[i] * min);
  min = Math.min(nums[i], nums[i] * tempMax, nums[i] * min);
  result = Math.max(result, max);
  }

  return result;
  };

module.exports = maxProduct;
