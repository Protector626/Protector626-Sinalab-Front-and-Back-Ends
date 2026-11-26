import './style.css';
import Attendance from './pages/Attendance';
import {BrowserRouter, Route, Routes} from 'react-router-dom'


function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/attendance' element={<Attendance/>}/>
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
