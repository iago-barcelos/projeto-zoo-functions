const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  const { species } = data;
  const getSpecies = species.filter((animal) => ids.includes(animal.id));
  return getSpecies;
};

module.exports = getSpeciesByIds;
