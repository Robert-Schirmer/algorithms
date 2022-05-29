// https://leetcode.com/problems/add-two-numbers/
const addTwoNumbers = (l1, l2) => {
  let newList, shortList;
  if (l1.length >= l2.length) {
    newList = l1;
    shortList = l2;
  } else {
    newList = l2;
    shortList = l1;
  }

  let carry = 0;
  for (let index = 0; index < newList.length; index++) {
    if (!carry && shortList[index] == null) {
      return newList;
    }

    const sum = newList[index] + (shortList[index] ?? 0) + carry;
    newList[index] = sum % 10;
    carry = Math.floor(sum / 10);
  }

  if (carry) {
    newList.push(carry);
  }

  return newList;
};

export default addTwoNumbers;
