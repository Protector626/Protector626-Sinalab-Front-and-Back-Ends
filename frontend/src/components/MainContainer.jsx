import { useState, useEffect } from "react";

const MainContainer = () => {

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
    <h1>Attendance System Tab</h1>

    <article id="Selection">
      <div className="Selector">
        <input type="date" name="Calendar" id="calendar" />
      </div>
      <div className="Selector">
        <select name="Employee Name" id="employee_selection">
          <option value="">Select Employee</option>
          <option value="E1001">John Doe</option>
          <option value="E1002">Jane Smith</option>
          <option value="E1003">Michael Johnson</option>
        </select>
      </div>
      <div className="Selector">
          {time.toLocaleTimeString()}
      </div>
    </article>


    <table id="MainTable">
      <tr>
        <th>Employee_ID</th>
        <th>Employee_Name</th>
        <th>TimeIn</th>
        <th>Date</th>
      </tr>
      <tr>
        <td>1001</td>
        <td>John Doe</td>
        <td>08:00:32 AM</td>
        <td>2023-10-01</td>
      </tr>
      <tr>
        <td>1002</td>
        <td>Jane Smith</td>
        <td>09:50:23 AM</td>
        <td>2023-10-01</td>
      </tr>
      <tr>
        <td>1003</td>
        <td>Michael Johnson</td>
        <td>08:56:20 AM</td>
        <td>2023-10-01</td>
      </tr>
    </table>
    <div className="button_container">
      <button>Qr Scan</button>
      <button>Qr Registration</button>
      <button>Logout</button>
    </div>
    
    

    </>
  )
}

export default MainContainer;