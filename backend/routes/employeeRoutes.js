import * as employeeController from '../controllers/employeeController.js';
import express from 'express';  

// Define routes for employee operations
const employeeRoutes = express.Router();
employeeRoutes.get('/all', employeeController.fetchAllEmployees); 

export default employeeRoutes;