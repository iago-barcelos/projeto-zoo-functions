const data = require('../data/zoo_data');

const { species } = data;
const countAnimals = (animal) => {
  if (!animal) {
    return species.reduce((obj, { name, residents }) => ({ ...obj, [name]: residents.length }), {});
  }

  const animalSpecies = animal.species;
  const getSpecies = species.find(({ name }) => name === animalSpecies);

  if (animal.sex) {
    const animalSex = animal.sex;
    const getResidents = getSpecies.residents.filter(({ sex }) => sex === animalSex);
    const arrayResidents = getResidents.length;
    return arrayResidents;
  }

  return getSpecies.residents.length;
};

module.exports = countAnimals;
