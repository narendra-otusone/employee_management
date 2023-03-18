import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Employee Management</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        {/* <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/home">Home</a>
        </li> */}
        <li className="nav-item">
          {/* <a className="nav-link" href="/emp/login">Login</a> */}
          <NavLink to="/emp/login" style={({isActive})=>{return{backgroundColor:isActive ? 'orange':""}}} >Login</NavLink>
        </li>
    
        <li className="nav-item">
          {/* <a className="nav-link " href="/emp/registration" tabindex="-1" >Registration</a> */}
          <NavLink to="/emp/registration" style={({isActive})=>{return{backgroundColor:isActive ? 'orange':""}}} >Registration</NavLink>

        </li>
        <li className="nav-item">
          {/* <a className="nav-link" href="/emp/details">Employee</a> */}
          <NavLink to="/emp/details" style={({isActive})=>{return{backgroundColor:isActive ? 'orange':""}}} >Employee</NavLink>

        </li>
        <li className="nav-item">
          {/* <a className="nav-link" href="/manager">Manager</a> */}
          <NavLink to="/manager" style={({isActive})=>{return{backgroundColor:isActive ? 'orange':""}}} >Manager</NavLink>

        </li>
        <li className="nav-item">
          {/* <a className="nav-link" href="/user/profile">Profile</a> */}
          <NavLink to="/user/profile" style={({isActive})=>{return{backgroundColor:isActive ? 'orange':""}}} >Profile</NavLink>

        </li>
      </ul>
      
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
