import React, { useState, useNavigate } from 'react'
import Input from '../../UIcomponents/Input'
import Button from '../../UIcomponents/Button'
import Form from 'react-bootstrap/Form';


import './register.css'

const RegistrationForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [image,setImage]=useState("")

    const Submit=()=>{
        console.log("registration details",email,password,name,image)
    }
    // const navigate = useNavigate();
    return (
        <div className='login-field'>
            <div className='registration'>
                {/* <form> */}
                    <div className='py-3 inputWithIcon '>
                        <i class="fa-regular fa-envelope-open"></i>
                        <Input
                            type="text"
                            placeholder="Name"
                            width="100%"
                            margin="10px 0"
                            borderRadius="5px"
                            height="45px"
                            value={name} 
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className='py-3 inputWithIcon'>
                        <i class="fa-solid fa-lock"></i>
                        <Input type="email" placeholder="Email" width="100%" margin="10px 0" borderRadius="5px"
                            height="45px"
                            value={email}
                             onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className='py-3 inputWithIcon'>
                        <i class="fa-solid fa-lock"></i>
                        <Input type="password" placeholder="Password" width="100%" margin="10px 0" borderRadius="5px"
                            height="45px" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                    </div>


                    <div className='py-3'>    
                        <label> Select Your Image</label>
                        <Form.Control type="file" name="image" 
                        // value={image}
                        onChange={(e) => setImage(e.target.files[0])} />
                    </div>
                    <Button
                        name="Click to Register"
                        color="#fff"
                        backgroundColor="#000"
                        padding="10px 14px"
                        textTransform="uppercase"
                        borderRadius="3px"
                        border="none"
                        onClick={Submit}
                    />
                {/* </form> */}
            </div>
        </div>
    )
}

export default RegistrationForm
