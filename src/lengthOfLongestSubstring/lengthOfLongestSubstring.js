// https://leetcode.com/problems/longest-substring-without-repeating-characters/
const lengthOfLongestSubstring = (str) => {
  if (!str) return 0;

  let longestSubstring = str[0];

  let windowStartIndex = 0;
  for (let index = 1; index < str.length; index++) {
    const subStr = str.substring(windowStartIndex, index);
    const newCharacter = str[index];
    const indexOf = subStr.indexOf(newCharacter);
    if (indexOf !== -1) {
      windowStartIndex += indexOf + 1;
    } else {
      const newSubStr = subStr + newCharacter;
      if (newSubStr.length > longestSubstring.length) {
        longestSubstring = newSubStr;
      }
    }
  }

  return longestSubstring.length;
};

export default lengthOfLongestSubstring;
