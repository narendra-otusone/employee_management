import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './leaveStyle.css'


const TaskCard = ({ Name, Email, idKey,Task, TaskManager,isApproved,Title }) => {
    return (
        <div className='task-status'>
            <Card style={{ width: '22rem', height: "25rem" }} className="mt-3 profile-card" key={idKey}>
                
                <Card.Body>
                    <Card.Title>{Title}</Card.Title>
                    <Card.Text>
                        Employee ID         :<span className='float-r'> {idKey}</span><br /><br />
                        Employee Name       : <span className='float-r'>{Name}</span> <br /><br />

                        Employee Email      :<span className='float-r'>{Email}</span> <br/><br/>

                        Task                :<span className='float-r'> {Task}</span> <br/><br/>
                        
                        Task Manager        :<span className='float-r'>{TaskManager}</span>    <br/><br/>

                        Status              : <span className='float-r'>{isApproved}</span>
                    </Card.Text>

                    
                </Card.Body>
            </Card>
        </div>
    )
}

export default TaskCard

