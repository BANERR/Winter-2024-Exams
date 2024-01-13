// Generate random integer value in given range

const getRandomInt = (minLimit, maxLimit) => minLimit + Math.floor(Math.random() * (maxLimit - minLimit + 1));

module.exports = getRandomInt;
