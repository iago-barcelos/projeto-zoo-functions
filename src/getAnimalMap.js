const data = require('../data/zoo_data');

const { species } = data;

const getAnimalsByLocation = () =>
  species.reduce((acc, { location, name }) => {
    acc[location] = acc[location] || [];
    acc[location].push(name);
    return acc;
  }, {});

const getAnimalsByName = (opc) =>
  species.reduce((acc, { location, residents, name: animalName }) => {
    const { sex, sorted } = opc || {};
    let filteredResidents = residents;
    if (sex) {
      filteredResidents = residents.filter(({ sex: residentSex }) => sex === residentSex);
    }
    const residentNames = filteredResidents.map(({ name }) => name);
    if (sorted) {
      residentNames.sort();
    }
    acc[location] = acc[location] || [];
    acc[location].push({ [animalName]: residentNames });
    return acc;
  }, {});

const getAnimalMap = (options) => {
  if (!options || !options.includeNames) {
    return getAnimalsByLocation();
  }
  return getAnimalsByName(options);
};

module.exports = getAnimalMap;
