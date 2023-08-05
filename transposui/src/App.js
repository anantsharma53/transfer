import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from './LoginForm/LoginForm';
import Register from './SignUpForm/SignUPForm'
import Header from './Header/Header';
import ActionPage from './ActionPage/ActionPage';
import ActionPage2 from './ActionPage2/ActionPage2';
import ProtectedRoute from './routes/ProtectedRoute';
import Homepage from './HomePage/Homepage';
import Dashboard from './Dashboard/Dashboard';
import EmployeeDetails from './EmployeeDetails/EmployeeDetails';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='' element={<Homepage/>}></Route>
      <Route path='/home1' element={<Homepage/>}></Route>
      <Route path='/emp' element={<EmployeeDetails/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}/>
      <Route path='/user' element={<ProtectedRoute Component={Register} />}/>
      <Route path='/dashboard' element={<ProtectedRoute Component={Dashboard} />}/>
      <Route path='/home' element={<ProtectedRoute Component={ActionPage2} />}/>
      <Route path='/viewemp' element={<ProtectedRoute Component={ActionPage} />}/>
    </Routes>
    </BrowserRouter>
   
  );
}

export default App;
