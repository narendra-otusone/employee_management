import React from 'react'
import RegistrationForm from '../components/RegistrationComponents/RegistrationForm'
import RegistrationHeading from '../components/RegistrationComponents/RegistrationHeading'
const UpdateEmployeedetails = () => {
  return (
    <div className='reg-details'>
      <div className=''>
      <RegistrationHeading title="Update Employee details" desc="Please Fill all the details "/>
      </div>
      <RegistrationForm/>
    </div>
  )
}

export default UpdateEmployeedetails
