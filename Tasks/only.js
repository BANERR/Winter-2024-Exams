// Copy only listed values from dict

const copyOnlyListedValues = (obj, ...allowedKeys) => {
  Object.keys(obj).map((key) => !allowedKeys.includes(key) ? delete obj[key] : null);

  return obj;
};

module.exports = copyOnlyListedValues;
