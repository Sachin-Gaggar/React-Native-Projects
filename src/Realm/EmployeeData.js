import Realm from 'realm';

const EmployeeSchema = {
  name: 'EmployeeInfo',
  properties: {
    id: 'int',
    name: 'string',
    designation: 'string',
    salary: 'int',
  },
  primaryKey: 'id',
};

const database = new Realm({
  schema: [EmployeeSchema],
  path: 'emplyee.realm',
});
const getAllData = () => {
  const result = database.objects('EmployeeInfo');
  return result;
};

const addData = (_id, _name, _designation, _salary) => {
  try {
    database.write(() => {
      const data = database.create('EmployeeInfo', {
        id: _id,
        name: _name,
        designation: _designation,
        salary: _salary,
      });
    });
  } catch (e) {
    console.log(e);
  }
};

const deleteAllData = () => {
  database.write(() => {
    database.delete(getAllData());
  });
};

const sortSalaryInAscending = () => {
  const data = database.objects('EmployeeInfo');
  const result = data.sorted('salary');
  return result;
};
const sortSalaryInDescending = () => {
  const data = database.objects('EmployeeInfo');
  const result = data.sorted('salary', true);
  return result;
};

const search = (name) => {
  console.log('inside search');
  const data = database.objects('EmployeeInfo');
  console.log(data, '____', name);
  try {
    const result = data.filtered(`name="${name}"`);
    return result;
  } catch (e) {
    console.log(e);
  }
};
const closeDatabase = () => {
  database.close();
};

export {
  getAllData,
  search,
  closeDatabase,
  sortSalaryInAscending,
  sortSalaryInDescending,
  deleteAllData,
  addData,
};
