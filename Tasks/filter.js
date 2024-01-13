// Filter array by type name

const filterByType = (arr, type) => {
  const indicesToRemove = [];

  for (element of arr) {
    const index = arr.indexOf(element);
    
    if (typeof arr[index] !== type) {
      indicesToRemove.unshift(index);
    }
  }

  for (element of indicesToRemove) arr.splice(element, 1);

  return arr;
};

module.exports = filterByType;
