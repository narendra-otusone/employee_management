import React, { useState } from 'react'
import Heading from '../../UIcomponents/Heading'
import Login from './Login'

import '../../pages/loginPage/loginStyle.css'

const Employee = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    const Submit=()=>{
        console.log("here is employee details",email,password)
        setEmail("")
        setPassword("")
        // console.log("hi")
    }
    return (
        <div className='emp-login'>
            <Heading title="Employee Login" desc="make sure you have login ID" />
            <Login email={email} setEmail={setEmail} password={password} setPassword={setPassword} onSubmit={Submit} />
        </div>
    )
}

export default Employee
