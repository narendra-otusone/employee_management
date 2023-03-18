import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import './profileStyle.css'

const ProfileCard = ({ Name, Email, idKey, Profile, Pic }) => {
    return (
        <div >
            <Card  style={{ width: '25rem' }} className="mt-3 profile-card card-body" key={idKey}>
                <Card.Img variant="top" src={Pic} style={{
                    width: "60%",
                    height: "150px",
                    borderRadius: "50%",
                    margin: "auto"
                }} className="mt-2 profile-pic" />
                <Card.Body className='card-desc'>
                    <Card.Title>{Profile}</Card.Title>
                    <Card.Text>
                        Employee ID : <span className='float-r'> {idKey}</span><br /><br />
                        Employee Name :<span className='float-r'> {Name}</span><br /><br />

                        Employee Email:<span className='float-r'> {Email}</span><br /><br />
                    </Card.Text>

                    <div className='' style={{ display: 'flex', justifyContent: "space-between" }}>
                        <Button variant="primary" text='white'><NavLink to={'/user/update-profile/' + idKey} className='text-decoration-none text-light'>Update</NavLink></Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ProfileCard
