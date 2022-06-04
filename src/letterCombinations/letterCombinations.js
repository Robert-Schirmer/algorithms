// https://leetcode.com/problems/letter-combinations-of-a-phone-number/
/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = (digits) => {
  if (!digits) return [];

  const phoneNumberLetterMap = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };

  const digitsArray = digits.split("");
  let numOfcombinations = 1;
  const digitLetterOptionsIndex = digitsArray.map((digit, index) => {
    numOfcombinations *= phoneNumberLetterMap[digit].length;
    // If last digit index, set to -1 so first bump of indexes sets it to 0
    const currentLetterIndex = index === digitsArray.length - 1 ? -1 : 0;
    return { currentLetterIndex, maxIndex: phoneNumberLetterMap[digit].length - 1 };
  });
  const combinations = new Array(numOfcombinations);

  const bumpDigitLetterIndex = (digitIndex) => {
    if (digitLetterOptionsIndex[digitIndex].currentLetterIndex === digitLetterOptionsIndex[digitIndex].maxIndex) {
      // Reset to 0
      digitLetterOptionsIndex[digitIndex].currentLetterIndex = 0;
      // Bump the higher up digitIndex
      bumpDigitLetterIndex(digitIndex - 1);
    } else {
      digitLetterOptionsIndex[digitIndex].currentLetterIndex += 1;
    }
  };

  for (let combinationsIndex = 0; combinationsIndex < combinations.length; combinationsIndex++) {
    bumpDigitLetterIndex(digitsArray.length - 1);

    combinations[combinationsIndex] = digitsArray
      .map((digit, digitIndex) => {
        const letterOptions = phoneNumberLetterMap[digit];
        const currentLetterIndex = digitLetterOptionsIndex[digitIndex].currentLetterIndex;
        return letterOptions[currentLetterIndex];
      })
      .join("");
  }

  return combinations;
};

export default letterCombinations;
