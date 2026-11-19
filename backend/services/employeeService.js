
import * as employeeModel from '../models/employeeModel.js';
import ValidationError from '../utils/ValidationError.js';

// Fetch all employees from the database
export const fetchAllEmployees = async () => {
    const employees = await employeeModel.fetchAllEmployees();
    return employees;
}


//Identify if a book already exists in the database by name and author
const doesEmployeeExist = async (employee) => {
    let existing;
    if (Object.hasOwn(employee, 'Employee_ID')) {
        existing = await employeeModel.findEmployeeById(employee.Employee_ID);
    }else{
        existing = await employeeModel.findEmployeeByName(employee);
    }

    if (existing.length > 0) {
        return true;
    }
    return false;
}


// Create a new book in the database and check if the book already exists and if the name and author is provided 
export const createEmployeeName = async (employee) => {
    if (!employee.Employee_Name) {
        throw new ValidationError(404, "Name is required!");
    }

    const existing = await doesEmployeeExist(employee);

    if (existing){
        throw new ValidationError(409, "Employee already exists!");
    }
    const EmployeeID = await employeeModel.insert(employee);
    return EmployeeID;
}

// Update an existing book in the database and check if the book already exists and if the name and author is provided
export const updateBook = async (employee) => {

    if (!employee.Employee_ID) {
        throw new ValidationError(404, "Name is required!");
    }

    const existing = await doesEmployeeExist(employee);

    if (!existing){
        throw new ValidationError(404, "Book does not exist!");
    }
    
    const updateEmployee = await employeeModel.update(employee);
    return updateEmployee;
}

// Remove an existing book in the database
export const deleteBook = async (Employee_ID) => {
    const employee = {Employee_ID}
    const existing = await doesEmployeeExist(employee);
    if (!existing) {
        throw new ValidationError(404, "Employee does not exist!");
    }
    
    const deleteEmployee = await employeeModel.remove(Employee_ID);
    return deleteEmployee;
}