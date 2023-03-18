import React,{useState} from 'react'
import Button from '../../UIcomponents/Button'
import Input from '../../UIcomponents/Input'
// import Navbar from '../UIcomponents/Navbar'
import { Link } from "react-router-dom";


const Login = ({email,setEmail,setPassword,password,onSubmit}) => {
    const [name,setName]=useState("")
    // console.log(email,name)
    
    return (
        <div>
            <div className='login-fiel'>

                <Input
                    type="email"
                    placeholder="Email"
                    width="100%"
                    margin="10px 0"
                    borderRadius="5px"
                    height="45px"
                    name="email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                />
                <Input
                    type="password"
                    placeholder="Password"
                    width="100%"
                    margin="10px 0"
                    borderRadius="5px"
                    height="45px"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}

                />


                <Button
                    name="Login"
                    color="#fff"
                    backgroundColor="#000"
                    padding="10px 40px"
                    textTransform="uppercase"
                    borderRadius="3px"
                    border="none"
                    onClick={onSubmit}
                    // onClick={()=>console.log("hello",email,name)}
                />

                <div className='forgat-password'>
                    <div className='float-r'>
                        <Link to="/forgot/password"> <span>Forgot Password?</span></Link>
                    </div>
                </div>

                <div className='role-based-login'>

                    <div class="form-check">
                        <div className='float-r'>
                            <Link to="/hr/admin"> <span>HR Login</span></Link>
                        </div>
                    </div>
                    <div className='float-r'>
                        <Link to="/task/manager"> <span>Manager Login</span></Link>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Login
