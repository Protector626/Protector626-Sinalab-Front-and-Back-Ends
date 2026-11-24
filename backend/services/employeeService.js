import * as employeeModel from '../models/employeeModel.js';
import ValidationError from '../utils/ValidationError.js';

//Fetch all employees
export const fetchAllEmployees = async () => {
    const employees = await employeeModel.fetchAllEmployees();
    return employees;
};

//Check if employee exists
const doesEmployeeExist = async (employee) => {

    let existing;

    if (Object.hasOwn(employee, 'Employee_ID')) {
        existing = await employeeModel.findEmployeeById(
            employee.Employee_ID
        );
    } else {
        existing = await employeeModel.findEmployeeByName(employee);
    }

    return existing.length > 0;
};

//Create a new employee
export const createEmployee = async (employee) => {

    if (!employee.Employee_Name) {
        throw new ValidationError(400, "Employee name is required!");
    }

    const existing = await doesEmployeeExist(employee);

    if (existing) {
        throw new ValidationError(409, "Employee already exists!");
    }

    const EmployeeID = await employeeModel.insert(employee);

    return EmployeeID;
};

// Update an employee
export const updateEmployee = async (employee) => {

    if (!employee.Employee_ID) {
        throw new ValidationError(400, "Employee ID is required!");
    }

    if (!employee.Employee_Name) {
        throw new ValidationError(400, "Employee name is required!");
    }

    const existing = await doesEmployeeExist(employee);

    if (!existing) {
        throw new ValidationError(404, "Employee does not exist!");
    }

    const updatedEmployee = await employeeModel.update(employee);

    return updatedEmployee;
};

// Delete an employee
export const deleteEmployee = async (Employee_ID) => {

    if (!Employee_ID) {
        throw new ValidationError(400, "Employee ID is required!");
    }

    const existing = await doesEmployeeExist({
        Employee_ID
    });

    if (!existing) {
        throw new ValidationError(404, "Employee does not exist!");
    }

    const deletedEmployee = await employeeModel.remove(Employee_ID);

    return deletedEmployee;
};