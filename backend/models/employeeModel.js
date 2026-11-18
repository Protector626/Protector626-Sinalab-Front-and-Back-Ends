import pool from '../config/db.js';
//read
export const fetchAllEmployees = async () => {
    const [rows] = await pool.query("SELECT * FROM employee");
    return rows;
};




