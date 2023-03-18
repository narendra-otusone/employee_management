import React from 'react'
import './uistyle.css'
const Heading = (props) => {
    return (
        <div className='heading'>
            <div className='heading-body'>
                {/* <img src='https://www.shutterstock.com/image-vector/hrms-human-resource-management-system-260nw-1938004468.jpg' alt='...' /> */}
                <h1>{props.title} </h1>
                <h6>{props.desc}</h6>
            </div>
        </div>
    )
}

export default Heading
