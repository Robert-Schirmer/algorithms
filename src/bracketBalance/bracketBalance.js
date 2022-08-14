/**
 * Given a string expression, write a program (balanced() method) to examine whether the pairs and the orders of
 * “{“, “}”, “(“, “)”, “[“, “]” are correct in exp (all other chars are ignored). If they are correct, it is balanced.
 * If balanced, just return "Balanced".
 * If not balanced, return "Not Balanced: <problem-index>", where problem-index is the index of the first bracket
 * that caused un-balancing.
 * @param {string} input
 * @return {string} Balance status
 */
const bracketBalance = (input) => {
  const closeMap = {
    "}": "{",
    ")": "(",
    "]": "[",
  };

  const openIndexes = {
    "{": [],
    "(": [],
    "[": [],
  };

  for (let index = 0; index < input.length; index++) {
    const char = input[index];
    if (closeMap[char]) {
      // Closing bracket
      const bracketOpenIndexes = openIndexes[closeMap[char]];
      if (bracketOpenIndexes.length - 1 < 0) {
        return `Not Balanced: ${index}`;
      }
      for (const openBracket of Object.keys(openIndexes)) {
        if (openBracket === char) {
          continue;
        }
        if (openIndexes[openBracket].length) {
          // Closing while another bracket is still open, check indexes of still open vs closing
          const bracketClosingOpenIndex = bracketOpenIndexes[bracketOpenIndexes.length - 1];

          const otherBracketOpenIndexes = openIndexes[openBracket];
          const otherBracketNewestOpenIndex = otherBracketOpenIndexes[otherBracketOpenIndexes.length - 1];

          if (bracketClosingOpenIndex < otherBracketNewestOpenIndex) {
            return `Not Balanced: ${otherBracketNewestOpenIndex}`;
          }
        }
      }
      openIndexes[closeMap[char]].pop();
    } else if (openIndexes[char]) {
      // Opening bracket
      openIndexes[char].push(index);
    }
  }

  for (const openBracket of Object.keys(openIndexes)) {
    if (openIndexes[openBracket].length % 2 !== 0) {
      return `Not Balanced: ${openIndexes[openBracket][0]}`;
    }
  }

  return "Balanced";
};

export default bracketBalance;
