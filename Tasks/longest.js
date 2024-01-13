// Find longest string

const findLongestString = (strings = []) => {
  let longestString = '';

  for (const str of strings) {
    if (str.length > longestString.length) {
      longestString = str;
    }
  }

  return longestString;
};

module.exports = findLongestString;
