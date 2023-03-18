import React, { useState, useNavigate } from 'react'
import Input from '../../UIcomponents/Input'
import Button from '../../UIcomponents/Button'
import Form from 'react-bootstrap/Form';

const UpdateProfile = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [image,setImage]=useState("")

  return (
    <div className='login-field'>
            <div className='registration'>
                <form>
                    <div className='py-3 inputWithIcon '>
                        <i class="fa-regular fa-envelope-open"></i>
                        <Input
                            type="text"
                            placeholder="Name"
                            width="100%"
                            margin="10px 0"
                            borderRadius="5px"
                            height="45px" onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className='py-3 inputWithIcon'>
                        <i class="fa-solid fa-lock"></i>
                        <Input type="email" placeholder="Email" width="100%" margin="10px 0" borderRadius="5px"
                            height="45px" onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className='py-3 inputWithIcon'>
                        <i class="fa-solid fa-lock"></i>
                        <Input type="password" placeholder="Password" width="100%" margin="10px 0" borderRadius="5px"
                            height="45px" onChange={(e) => setPassword(e.target.value)} />
                    </div>


                    <div className='py-3'>    
                        <label> Select Your Image</label>
                        <Form.Control type="file" name="image" onChange={(e) => setImage(e.target.files[0])} />
                    </div>
                    <Button
                        name="Update Profile Details"
                        color="#fff"
                        backgroundColor="#000"
                        padding="10px 14px"
                        textTransform="uppercase"
                        borderRadius="3px"
                        border="none"
                    />
                </form>
            </div>
        </div>
  )
}

export default UpdateProfile
