// Filter array by type name

const filterByType = (arr, type) => {
  const indicesToRemove = [];

  arr.map((element, index) =>
    (typeof element !== type ? indicesToRemove.unshift(index) : null),
  );

  indicesToRemove.map((element) => arr.splice(element, 1));

  return arr;
};

module.exports = filterByType;
