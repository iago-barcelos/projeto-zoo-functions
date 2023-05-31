const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  const { employees } = data;
  const getEmployeeName = employees.filter(
    (employee) => employee.firstName === employeeName || employee.lastName === employeeName,
  );
  return getEmployeeName[0] || {};
};

module.exports = getEmployeeByName;
