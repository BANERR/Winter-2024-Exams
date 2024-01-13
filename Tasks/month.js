// Get month number

const getMonthNumber = (monthName) => {
  const monthsList = [
    'jan', 'feb','mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec',
  ];

  for (let i = 0; i < monthsList.length; i++) {
    if (monthName.toLowerCase().startsWith(monthsList[i])) return i + 1;
  }

  return -1;
};

module.exports = getMonthNumber;
