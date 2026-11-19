import * as employeeService from '../services/employeeService.js';

export const fetchAllEmployees = async (request, response) => {
    const employees = await employeeService.fetchAllEmployees();
    response.status(200).json(employees);
}



export const createEmployeeName = async (req, res) =>{
    const {name} = req.body;
    const employee = {name};

// Call the bookService to insert the new book
    try{
        const EmployeeID = await employeeService.createEmployeeName(employee);
        res.status(200).json({
            success: true,
            message: EmployeeID
        });
    }catch(e){
        console.log(e);
        res.status(e.statusCode).json({
            error: e.message
        })
    }
}


// Update an existing book in the database
export const editEmployee = async (req, res) => {
    const {name } = req.body;
    const { id } = req.params;
    const employee = {id: parseInt(id), name};

    try {
        const updatedBook = await bookService.updateBook(book);
        res.status(200).json({
            success: true,
            message: updatedBook
        });
    } catch (e) {
        console.log(e);
        res.status(e.statusCode).json({
            error: e.message
        });
    }
}


// Delete a book from the database
export const deleteBook = async (req, res) => {
    const { id } = req.params;


    try {
        const deletedBook = await bookService.deleteBook(id);
        res.status(200).json({
            success: true,
            message: deletedBook
        });
    } catch (e) {
        console.log(e);
        res.status(e.statusCode).json({
            error: e.message
        });
    }
}