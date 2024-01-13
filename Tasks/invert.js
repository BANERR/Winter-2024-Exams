// Reverse an array, you can't use .reverse()

const reverseArray = (arr) => {
  const reversedArray = [];

  while (arr.length > 0) {
    reversedArray.push(arr.pop());
  }

  return reversedArray;
};

module.exports = reverseArray;
