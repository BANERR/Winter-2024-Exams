// Get month number

const getMonthNumber = (monthName) => {
  const monthsList = [
    'jan', 'feb', 'mar', 'apr', 
    'may', 'jun', 'jul', 'aug', 
    'sep', 'oct', 'nov', 'dec',
  ];

  const lowerMonthName = monthName.toLowerCase();

  const index = monthsList.findIndex((month) => lowerMonthName.startsWith(month));

  return index !== -1 ? index + 1 : -1;
};

module.exports = getMonthNumber;
