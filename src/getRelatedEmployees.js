const data = require('../data/zoo_data');

const isManager = (id) => {
  const { employees } = data;
  return employees.some((employee) => employee.managers.includes(id));
};

const getRelatedEmployees = (managerId) => {
  const { employees } = data;
  if (isManager(managerId)) {
    return employees.reduce((result, employee) => {
      if (employee.managers.includes(managerId)) {
        return [...result, `${employee.firstName} ${employee.lastName}`];
      }
      return result;
    }, []);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
};
// fazer validação com o includes
module.exports = { isManager, getRelatedEmployees };
