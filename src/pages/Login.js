import React from 'react'
import Button from '../UIcomponents/Button'
import { useNavigate, NavLink } from 'react-router-dom'
const Login = () => {
  const navigate = useNavigate()
  const Redirect = () => {
    navigate("/emp/login")
    console.log("hello button")
  }
  return (
    <div className='main-page'>
      <div className='mainpage-btn'>
        <Button
          name="Login"
          color="#fff"
          backgroundColor="#000"
          padding="10px 24px"
          textTransform="uppercase"
          borderRadius="10px"
          border="none"
          onClick={() => Redirect()}
        />

      </div>
    </div>
  )
}

export default Login
