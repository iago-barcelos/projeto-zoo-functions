const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const firstId = data.employees.find((employee) => employee.id === id).responsibleFor[0];

  const { name, sex, age } = data.species.find((species) => species.id === firstId)
    .residents.map((resident) => resident)
    .reduce((oldest, current) => (current.age > oldest.age ? current : oldest));

  return [name, sex, age];
};

module.exports = getOldestFromFirstSpecies;
