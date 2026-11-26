const QRRegistrationContainer = ({ onBack }) => {
    return (
    <>

    <h1>The QR Registration</h1>
    <div id="Name_Registration">
        <input type="text" placeholder="Enter the Employee Name" />
        <button>Create Qr Code</button>
    </div>
    <table id="ExistingEmployeeTable">
      <tr>
        <th>Employee_ID</th>
        <th>Employee_Name</th>
        <th>QR Code</th>
        <th>Removal Action</th>
      </tr>
      <tr>
        <td>1001</td>
        <td>John Doe</td>
        <td></td>
        <td><button>Remove</button></td>
      </tr>
      <tr>
        <td>1002</td>
        <td>Jane Smith</td>
        <td></td>
        <td><button>Remove</button></td>
      </tr>
      <tr>
        <td>1003</td>
        <td>Michael Johnson</td>
        <td></td>
        <td><button>Remove</button></td>
      </tr>
    </table>
    <button onClick={onBack}> Return to Attendance Page</button>

    </>
    )
}

export default QRRegistrationContainer;