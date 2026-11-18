
import * as employeeModel from '../models/employeeModel.js';


// Fetch all employees from the database
export const fetchAllEmployees = async () => {
    const employees = await employeeModel.fetchAllEmployees();
    return employees;
}
