import * as employeeService from '../services/employeeService.js';

export const fetchAllEmployees = async (request, response) => {
    const employees = await employeeService.fetchAllEmployees();
    response.status(200).json(employees);
}



