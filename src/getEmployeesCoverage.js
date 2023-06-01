const data = require('../data/zoo_data');

const { species, employees } = data;

const findEmployeeByName = (name) =>
  employees.find((emp) => emp.firstName === name || emp.lastName === name);

const findEmployeeById = (id) =>
  employees.find((emp) => emp.id === id);

const getEmployeeCoverage = () =>
  employees.reduce((result, employee) => {
    const { id, firstName, lastName, responsibleFor } = employee;
    const fullName = `${firstName} ${lastName}`;
    const employeeSpecies = species
      .filter((speciesObj) => responsibleFor.includes(speciesObj.id))
      .map((speciesObj) => speciesObj.name);
    const locations = species
      .filter((speciesObj) => responsibleFor.includes(speciesObj.id))
      .map((speciesObj) => speciesObj.location);
    const employeeData = {
      id,
      fullName,
      species: employeeSpecies,
      locations,
    };
    result.push(employeeData);
    return result;
  }, []);

const getEmployeeData = (employee) => {
  const employeeSpecies = species
    .filter((speciesObj) => employee.responsibleFor.includes(speciesObj.id))
    .map((speciesObj) => speciesObj.name);
  const locations = species
    .filter((speciesObj) => employee.responsibleFor.includes(speciesObj.id))
    .map((speciesObj) => speciesObj.location);
  const { id, firstName, lastName } = employee;
  const fullName = `${firstName} ${lastName}`;
  return {
    id,
    fullName,
    species: employeeSpecies,
    locations,
  };
};

const getEmployeesCoverage = (obj) => {
  if (!obj) {
    return getEmployeeCoverage();
  }
  let employee;
  if (obj.name) {
    employee = findEmployeeByName(obj.name);
  } else {
    employee = findEmployeeById(obj.id);
  }
  if (!employee) {
    throw new Error('Informações inválidas');
  } else {
    return getEmployeeData(employee);
  }
};

module.exports = getEmployeesCoverage;
