const data = require('../data/zoo_data');

const getAnimalsOlderThan = (species, age) => {
  const speciesFinder = data.species.find((animal) => animal.name === species);

  if (!speciesFinder) {
    return false;
  }

  const isOlderThan = !speciesFinder.residents.some((animal) => animal.age < age);

  return isOlderThan;
};

module.exports = getAnimalsOlderThan;
