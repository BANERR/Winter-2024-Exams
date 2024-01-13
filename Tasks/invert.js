// Reverse an array, you can't use .reverse()

const reverseArray = (arr) => {
  const keys = Object.keys(arr);

  keys.forEach((_, index) => {
    keys[index] = arr.pop();
  });

  return keys;
};

module.exports = reverseArray;
