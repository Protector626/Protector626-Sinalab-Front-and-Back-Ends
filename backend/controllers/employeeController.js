import * as employeeService from '../services/employeeService.js';

//Fetch all employees
export const fetchAllEmployees = async (req, res) => {

    try {
        const employees = await employeeService.fetchAllEmployees();

        res.status(200).json(employees);

    } catch (e) {
        console.log(e);

        res.status(e.statusCode).json({
            error: e.message
        });
    }
};

//Add employee
export const createEmployee = async (req, res) => {

    const { Employee_Name } = req.body;

    const employee = {
        Employee_Name
    };

    try {
        const EmployeeID = await employeeService.createEmployee(employee);

        res.status(201).json({
            success: true,
            message: "Employee successfully added!",
            Employee_ID: EmployeeID
        });

    } catch (e) {
        console.log(e);

        res.status(e.statusCode).json({
            error: e.message
        });
    }
};

//Edit employee
export const editEmployee = async (req, res) => {

    const { Employee_Name } = req.body;
    const Employee_ID = Number(req.params.id);

    const employee = {
        Employee_ID,
        Employee_Name
    };

    try {
        const updatedEmployee = await employeeService.updateEmployee(employee);

        res.status(200).json({
            success: true,
            message: "Employee successfully updated!",
            affectedRows: updatedEmployee
        });

    } catch (e) {
        console.log(e);

        res.status(e.statusCode).json({
            error: e.message
        });
    }
};

//Remove employee
export const deleteEmployee = async (req, res) => {

    const Employee_ID = Number(req.params.id);

    try {
        const deletedEmployee = await employeeService.deleteEmployee(Employee_ID);

        res.status(200).json({
            success: true,
            message: "Employee successfully deleted!",
            affectedRows: deletedEmployee
        });

    } catch (e) {
        console.log(e);

        res.status(e.statusCode).json({
            error: e.message
        });
    }
};