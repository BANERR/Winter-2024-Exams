// Find longest string

const findLongestString = (strings) => {
  let length = -1;
  let longestString = '';

  for (let char of strings) {
   
    if (char.length > length) {
      length = char.length;
    } else {
      char = 0;
    }
  
    if (char.length >= length) {
      longestString = char;
    } else {
      char = -1;
    }

  }

  return longestString;
};

module.exports = findLongestString;
