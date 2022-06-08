/**
 * @param {number[]} nums
 * @param {number} k
 * @return nums
 */
const rotateArray = (nums, k) => {
  if (nums.length === 1 || k === 0) return nums;
  
  k = k % nums.length;
  nums.unshift(...nums.splice(-k));

  return nums;
};

export default rotateArray;