// Sum all number values in dict

const counterOfNumberValues = (obj) => {
  let sum = 0;
  const keys = Object.keys(obj);

  for (const key of keys) typeof obj[key] === 'number' ? sum += obj[key] : null;

  return sum;
};

module.exports = counterOfNumberValues;
