import pool from '../config/db.js';
//read
export const fetchAllEmployees = async () => {
    const [rows] = await pool.query("SELECT Employee_ID, Employee_Name, TimeIn, DATE_FORMAT(Date, '%Y-%m-%d') AS Date FROM employee");
    return rows;
};

// Find employee Name
export const findEmployeeByName = async (employee) => {
    const [rows] = await pool.query("SELECT * FROM employee WHERE Employee_Name = ?",
        [employee.Employee_Name]
    );
    return rows;
};

// Find employee ID
export const findEmployeeById = async (Employee_ID) => {
    const [rows] = await pool.query("SELECT * FROM employee WHERE Employee_ID = ?", 
        [Employee_ID]
    );
    return rows;
};




//Insert employee
export const insert = async (employee) => {
    const [result] = await pool.query(
        `INSERT INTO employee
        (Employee_Name, TimeIn, Date)
        VALUES (?, CURTIME(), CURDATE())`,
        [employee.Employee_Name]
    );

    return result.insertId;
};

//Update employee
export const update = async (employee) => {
    const [result] = await pool.query(
        "UPDATE employee SET Employee_Name = ? WHERE Employee_ID = ?",
        [employee.Employee_Name, employee.Employee_ID]
    );

    return result.affectedRows;
};

//Remove employee
export const remove = async (Employee_ID) => {
    const [result] = await pool.query(
        "DELETE FROM employee WHERE Employee_ID = ?",
        [Employee_ID]
    );

    return result.affectedRows;
};

