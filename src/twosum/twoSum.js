// https://leetcode.com/problems/two-sum/
const twoSum = (nums, target) => {
  const map = {};
  for (let index = 0; index < nums.length; index++) {
    const complement = target - nums[index];
    if (map[complement] != null) {
      return [index, map[complement]];
    }
    map[nums[index]] = index;
  }

  return null;
};

export default twoSum;
