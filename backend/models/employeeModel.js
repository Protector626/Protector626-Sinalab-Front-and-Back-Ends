import pool from '../config/db.js';
//read
export const fetchAllEmployees = async () => {
    const [rows] = await pool.query("SELECT * FROM employee");
    return rows;
};


export const findEmployeeByName = async (employee) => {
    const [rows] = await pool.query("SELECT * FROM employee WHERE Employee_Name = ?",
        [employee.Employee_Name]
    );
    return rows;
};

export const findEmployeeById = async (Employee_ID) => {
    const [rows] = await pool.query("SELECT * FROM employee WHERE Employee_ID = ?", 
        [Employee_ID]
    );
    return rows;
};

/*
//insert
export const insertEmployeeName = async (employee) =>{
    const [result] = await pool.query(
        "INSERT INTO employee(name) VALUES (?)",
        [employee.Employee_Name]
    );

    return result.insertId;
};
*/


//remove
export const removeEmployeeID = async (Employee_ID) => {
    const [result] = await pool.query(
        "DELETE FROM employee WHERE Employee_ID = ? ", 
        [Employee_ID]
    );
    return result.affectedRows;

}



