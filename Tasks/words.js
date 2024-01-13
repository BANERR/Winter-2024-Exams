// Count words in a string

const countWords = (string) => {
  let numberOfWords = 0;
  let inWord = false;

  for (const char of string) {
    if (char === ' ') inWord = false;
    else {
      if (!inWord) numberOfWords++;

      inWord = true;
    }
  }

  return numberOfWords;
};

module.exports = countWords;
