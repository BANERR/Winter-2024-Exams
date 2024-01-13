// Sum all numbers from an array

const sumNumbers = (arr) => {
  let sum = [0];

  for (element of arr) {
    const type = typeof element;

    if (type === 'number') {
      if (sum.length > 0) {
        const newSum = sum[sum.length - 1] + element;
        sum.push(newSum);
      }
    }
  }
  
  return sum[sum.length - 1];
};

module.exports = sumNumbers;
