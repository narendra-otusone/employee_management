import React,{useState} from 'react'
import Heading from '../../UIcomponents/Heading'
import Login from './Login'



import '../../pages/loginPage/loginStyle.css'


const Admin = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const Submit=()=>{
        console.log("here is employee details",email,password)
        setEmail("")
        setPassword("")
        // console.log("hi")
    }
    return (
        <div className='admin-login'>
            <Heading title="Admin/HR Login" desc="Login as an Admin" />
            <Login email={email} setEmail={setEmail} password={password} setPassword={setPassword} onSubmit={Submit} />

        </div>
    )
}

export default Admin
