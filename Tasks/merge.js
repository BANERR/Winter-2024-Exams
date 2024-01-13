// Merge two dictionaries

const  mergeTwoObjects = (firstObj, secondObj) => {
  let newObj = {};

  for (attributeName in firstObj) {
    newObj[attributeName] = firstObj[attributeName];
  }

  for (attributeName in secondObj) {
    newObj[attributeName] = secondObj[attributeName];
  }

  return newObj;
};
module.exports = mergeTwoObjects;
