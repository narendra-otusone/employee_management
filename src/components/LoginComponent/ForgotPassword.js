import React,{useState} from 'react'
import Input from '../../UIcomponents/Input'
import Button from '../../UIcomponents/Button'

const ForgotP = () => {
  const [email,setEmail]=useState("")

  const Submit=()=>{
    console.log("here is employee details",email)
    setEmail("")
    console.log("hi")
}
  return (
    <div className='emp-login'>
             <Input
                    type="email"
                    placeholder="Email"
                    width="100%"
                    margin="10px 0"
                    borderRadius="5px"
                    height="45px"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}

                />


                <Button
                    name="Forgot Password"
                    color="#fff"
                    backgroundColor="#000"
                    padding="10px 40px"
                    textTransform="uppercase"
                    borderRadius="3px"
                    border="none"
                    onClick={Submit}
                    // onClick={()=>console.log("hello",email,name)}
                />
    </div>
  )
}

export default ForgotP
