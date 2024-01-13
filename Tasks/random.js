// Generate random integer value in given range

const getRandomInt = (minLimit, maxLimit) => {
  if (maxLimit === undefined) {
    maxLimit = minLimit;
    return Math.floor(Math.random() * (maxLimit + 1));
  } else {
    return minLimit + Math.floor(Math.random() * (maxLimit - minLimit + 1));
  }
};

module.exports = getRandomInt;
