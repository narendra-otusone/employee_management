import React,{useState} from 'react'
import Login from './Login'

const Manger = () => {
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
    <Login email={email} setEmail={setEmail} password={password} setPassword={setPassword} onSubmit={Submit} />

    </div>
  )
}

export default Manger
