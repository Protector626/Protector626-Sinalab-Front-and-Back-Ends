import * as employeeController from '../controllers/employeeController.js';
import express from 'express';

const employeeRoutes = express.Router();

// READ
employeeRoutes.get('/all', employeeController.fetchAllEmployees);

// CREATE
employeeRoutes.post('/', employeeController.createEmployee);

// UPDATE
employeeRoutes.put('/:id', employeeController.editEmployee);

// DELETE
employeeRoutes.delete('/:id', employeeController.deleteEmployee);

export default employeeRoutes;