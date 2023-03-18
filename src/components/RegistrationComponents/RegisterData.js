import React, { useState } from 'react'

import "../loginstyle.css"
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import RegistrationHeading from './RegistrationHeading';



const Rightside = ({ setActive, setWelcome }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();

  

    //   login as Employee
    const Login = async (e) => {
        e.preventDefault()
        console.log(email, password)
        const config = {
            Headers: {
                "Content-Type": "application/json"
            }
        }
        // try {
        //     const res = await axios.post("/users/login", {
        //         email: email,
        //         password: password,
        //     }, config)
        //     if (res.status === 200) {
        //         sessionStorage.setItem("isActive", true)
        //         navigate("/dashboard")
        //         window.location.reload(true);  
        //     }

        // } catch (error) {
        //     console.log(error)
        //     alert("bad credentials")

        // }
    }

    return (
        <div className='container'>
            <div className='registration-card'>
                <RegistrationHeading title="Employee registration Form" desc="Fill details to get Register yourself" />
                <div>
                    <form>
                        <div className='py-3 inputWithIcon '>
                            <i class="fa-regular fa-envelope-open"></i>
                            <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className='py-3 inputWithIcon'>
                            <i class="fa-solid fa-lock"></i>
                            <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>

                        <div>
                            <div>

                            </div>
                           
                        </div>
                       

                        <button className='btn  log-btn' onClick={Login}>Log me in</button>
                    </form>
                    <p className='terms'>I agree to the Terms & Conditions and Privacy Policy</p>
                </div>
            </div>
        </div>
    )
}

export default Rightside
