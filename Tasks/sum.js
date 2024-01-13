// Sum all numbers from an array

const sumNumbers = (arr) => {
  let sum = 0;

  for (const num of arr) typeof num === 'number' ? sum += num : null;

  return sum;
};

module.exports = sumNumbers;
