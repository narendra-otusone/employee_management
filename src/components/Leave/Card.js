import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './leaveStyle.css'


const StatusCard = ({ Name, Email, idKey, Pic, From, To,isApproved,Title }) => {
    return (
        <div className='leave-status'>
            <Card style={{ width: '30rem', height: "25rem" }} className="mt-3 profile-card" key={idKey}>
                
                <Card.Body>
                    <Card.Title>{Title}</Card.Title>
                    <Card.Text>
                        Employee ID : <span className='float-r'> {idKey}</span><br /><br />
                        Employee Name : <span className='float-r'> {Name}</span><br /><br />

                        Employee Email:<span className='float-r'> {Email}</span><br /><br />

                        Leave Apply :<span className='float-r'> From {From} - To {To}</span><br /><br />

                        Status :<span className='float-r' style={{color:"black",fontSize:"25px",textDecoration:"underline green"}}> {isApproved}</span><br /><br />
                    </Card.Text>

                    
                </Card.Body>
            </Card>
        </div>
    )
}

export default StatusCard

