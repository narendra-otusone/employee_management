import React from 'react'

const RegistrationHeading = (props) => {
    return (
        <div className='registration-data text-center'>
        <div className='reg-heading'>
            <h1>{props.title} </h1>
            <h6>{props.desc}</h6>
        </div>
        </div>
    )
}

export default RegistrationHeading
