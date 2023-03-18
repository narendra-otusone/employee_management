import React, { Suspense,useState } from 'react';

import { BrowserRouter, Route, Routes } from "react-router-dom"


import './App.css';
import ApplyLeave from './components/Leave/ApplyLeave';
import LeaveStatus from './components/Leave/LeaveStatus';
import TaskStatus from './components/Leave/TaskStatus';
import AssignTask from './components/ManagerPageComponents/AssignTask';
import TaskProgress from './components/ManagerPageComponents/TaskProgress';
import EmployeeDetails from './pages/EmployeeDetails';
import EmpRegistration from './pages/EmpRegistration';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import AdminLogin from './pages/loginPage/AdminLogin';
import EmployeeLogin from './pages/loginPage/EmployeeLogin';
import ForgotPassword from './pages/loginPage/ForgotPassword';
import ManagerLogin from './pages/loginPage/ManagerLogin';
import ManagerPage from './pages/ManagerPage';
import Profile from './pages/Profile';
import UpdateEmployeedetails from './pages/UpdateEmployeedetails';
import UpdateProfile from './pages/UpdateProfile';
import HeaderNavbar from './UIcomponents/Navbar';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <HeaderNavbar/>
      <Routes>
        {/* login routes */}
        <Route path='/' element={<Login/>} />
        <Route path='/emp/login' element={<EmployeeLogin />} />
        <Route path='/hr/admin' element={<AdminLogin/>} />
        <Route path='/task/manager' element={<ManagerLogin/>} />
        <Route path='/forgot/password' element={<ForgotPassword/>} />


        {/* <Route path='/home' element={<HomePage/>} /> */}

        <Route path='/emp/registration' element={<EmpRegistration/> } />

        {/*  */}
        <Route path='/apply/leave' element={<ApplyLeave/>} />
        <Route path='/check-leave/status' element={<LeaveStatus/>} />
        <Route path='/check/task' element={<TaskStatus/>} />
        <Route path='/assign/task/:id' element={<AssignTask/>} />
        <Route path='/update/task/:id' element={<AssignTask/>} />




        <Route path='/emp/details' element={<EmployeeDetails/>} />
        <Route path='/update/employee/:id' element={<UpdateEmployeedetails/>} />

        <Route path='/manager' element={<ManagerPage/>} />
        <Route path='/check/taskprogress/:id' element={<TaskProgress/>} />


        {/* profile */}
        <Route path='/user/profile' element={<Profile/>} />
        <Route path='/user/update-profile/:id' element={<UpdateProfile/>} />

        <Route path='*' element={<div>Page Not Found</div>} />


      </Routes>
     </BrowserRouter>

    </div>
  );
}

export default App;
