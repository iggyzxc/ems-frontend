import { useEffect, useState } from 'react';
import { listEmployees } from '../services/EmployeeService';

const ListEmployeeComponent = () => {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    // listEmployees().then((response) => setEmployees(response.data));
    listEmployees()
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  // const demoData = [
  //   { id: 1, firstName: 'John', lastName: 'Al', email: '1@gmail.com' },
  //   { id: 2, firstName: 'Jane', lastName: 'Jst', email: '2@gmail.com' },
  //   { id: 3, firstName: 'Doe', lastName: 'Psa', email: '3@gmail.com' },
  // ];
  return (
    <div className="container">
      <h2 className="text-center">Employee List</h2>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Employee Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployeeComponent;
