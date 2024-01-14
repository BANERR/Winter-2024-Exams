// Count words in a string

//Found more better variant of algoritm for this task

const countWords = (string) => {
  if (string == '') return 0;
  else return string.split(' ').length;
};

module.exports = countWords;
