const data = require('../data/zoo_data');

const countEntrants = (entrants) =>
  entrants.reduce(
    (counts, entrant) => {
      const { age } = entrant;
      return {
        child: counts.child + (age < 18 ? 1 : 0),
        adult: counts.adult + (age >= 18 && age < 50 ? 1 : 0),
        senior: counts.senior + (age >= 50 ? 1 : 0),
      };
    },
    { child: 0, adult: 0, senior: 0 },
  );

const calculateEntry = (entrants) => {
  if (!entrants || entrants.length === 0) {
    return 0;
  }

  const prices = Object.keys(data.prices);

  const total = prices.reduce((sum, category) => {
    const count = countEntrants(entrants)[category];
    const price = data.prices[category];
    const categoryTotal = count * price;
    console.log(`${category} Total:`, categoryTotal.toFixed(2));
    return sum + categoryTotal;
  }, 0);

  return Number(total.toFixed(2));
};

module.exports = { calculateEntry, countEntrants };
