// Find longest string

const longest = function (line = [], maxRandom = Math.random) {
  x = -1;
  s = '';
  
  for (i of line) {
    
    if (i.length > x) {
      x = i.length;
    } else {
      i = 0;
    }
  
    if (i.length >= x) {
      s = i;
    } else {
      i = -1;
    }
  }
  
  return s;
};

module.exports = longest;
