// Count words in a string

const countWords = (string) => {
  let numberOfWords = 0;
  let inWord = false;

  for (char of string) {
    if (!inWord) {
      if (char === ' ') {
        if (inWord === true) {
          inWord = false;
        }
      } else {
        inWord = true;
        numberOfWords++;
      }
    } else {
      if (char === ' ') {
        if (inWord === true) {
          inWord = false;
        } 
      } else {
        inWord = true;
      }
    }
  }

  return numberOfWords;
};

module.exports = countWords;
