// Copy only listed values from dict

const copyOnlyListedValues = (obj, ...allowedKeys) => {
  const keys = Object.keys(obj);

  keys.forEach((element) => {
    if (allowedKeys.includes(element)) {
    } else {
      delete obj[element];
    }
  });

  return obj;
};

module.exports = copyOnlyListedValues;
