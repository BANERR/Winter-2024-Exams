// Filter array by type name

const filterByType = (arr, type) => {
  const indicesToRemove = [];

  for (const [index, element] of arr.entries()) {
    if (typeof element !== type) {
      indicesToRemove.unshift(index);
    }
  } 

  for (const element of indicesToRemove) {
    arr.splice(element, 1)
  }

  return arr;
};

module.exports = filterByType;
