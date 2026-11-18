import express from "express";
import cors from "cors";
import employeeRoutes from "./routes/employeeRoutes.js";


let corsOptions = {
    origin: "http://localhost:5173"
};


//Create Express App    
const app = express();

app.use(express.json()); //Middleware to parse JSON request body sadas
app.use(cors(corsOptions)); //Enable CORS for all routes
// Define routes for book and student operations
app.use('/employee', employeeRoutes); // Use employee routes for /api/employees endpoint


// Start the server and listen on port 3000
try {
    const port = 3000; //Define port Variable
    app.listen(port, () => {
        console.log(`listening to port ${port}...`);
    });
} catch (e) {
    console.log(e);
}







