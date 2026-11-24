
import { useState, useEffect } from "react";

const MainContainer = ({ data }) => {

  const [time, setTime] = useState(new Date());
  const [date, setDate] = useState("");
  const [employee, setEmployee] = useState("");

  // REAL-TIME CLOCK
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);


  //Filter


  return (
    <>
      <h1>Attendance System Tab</h1>

      <article id="Selection">

        {/* DATE SELECTOR */}
        <div className="Selector">
          <input
            type="date"
            name="Calendar"
            id="calendar"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        {/* EMPLOYEE SELECTOR */}
        <div className="Selector">
          <select
            name="Employee Name"
            id="employee_selection"
            value={employee}
            onChange={(e) => setEmployee(e.target.value)}
          >

            <option value="">Select Employee</option>

            {data.map((employees) => (
              <option
                key={employees.Employee_ID}
                value={employees.Employee_ID}
              >
                {employees.Employee_Name}
              </option>
            ))}

          </select>

        </div>

        {/* REAL-TIME CLOCK */}
        <div className="Selector">
          {time.toLocaleTimeString()}
        </div>

      </article>

      {/* ATTENDANCE TABLE */}
      <table id="MainTable">

        <thead>
          <tr>
            <th>Employee_ID</th>
            <th>Employee_Name</th>
            <th>TimeIn</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
        {data.length > 0 ? (
          data.map((employees) => (
          <tr key={employees.Employee_ID}>
            <td>{employees.Employee_ID}</td>
            <td>{employees.Employee_Name}</td>
            <td>{employees.TimeIn}</td>
            <td>{employees.Date}</td>
          </tr>))
      ) : (
          <tr>
            <td colSpan="4">No employee records available.</td>
          </tr>
  )}
</tbody>

      </table>

      {/* BUTTONS */}
      <div className="button_container">
        <button>Qr Scan</button>
        <button>Qr Registration</button>
        <button>Logout</button>
      </div>

    </>
  );
};

export default MainContainer;
