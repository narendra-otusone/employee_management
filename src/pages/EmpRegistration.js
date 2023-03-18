import React from 'react'
import RegistrationForm from '../components/RegistrationComponents/RegistrationForm'
import RegistrationHeading from '../components/RegistrationComponents/RegistrationHeading'

const EmpRegistration = () => {
  return (
    <div className='reg-details'>
      <div className=''>
      <RegistrationHeading title="Register Employee details" desc="Please Fill all the details "/>
      </div>
      <RegistrationForm/>
    </div>
  )
}

export default EmpRegistration
