// Copy only listed values from dict

const copyOnlyListedValues = (obj, ...allowedKeys) => {
  Object.keys(obj).map((key) => {
    if (!allowedKeys.includes(key)) delete obj[key]
  });

  return obj;
};

module.exports = copyOnlyListedValues;
