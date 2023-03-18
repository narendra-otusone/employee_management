import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';

import Heading from '../../UIcomponents/Heading'
import Input from '../../UIcomponents/Input';
import Button from '../../UIcomponents/Button';


const AssignTask = () => {
    const [task, setTask] = useState("")

    const Name = "Rohit"
    const Email = "rohit@gmail.com"
    const idKey = "101"
    const Task = "learn MERN Stack"
    const TaskManager = "Rahul Sir"
    const Title = "Assign Task"
    const isApproved = "In Progress"

    const Submit=()=>{
    console.log(task)

    }
    return (
        <div className='task-assign'>
            <div>
                {/* <Heading title="Add new Task To Employee" desc="manager can assign new task the employee" /> */}

                <Card style={{ width: '22rem', height: "25rem" }} className="mt-3 profile-card" key={idKey}>

                    <Card.Body>
                        <Card.Title>{Title}</Card.Title>
                        <Card.Text>
                            Employee ID         :<span className='float-r'> {idKey}</span><br /><br />
                            Employee Name       : <span className='float-r'>{Name}</span> <br /><br />

                            Employee Email      :<span className='float-r'>{Email}</span> <br /><br />

                            Task                :<span className='float-r'>
                                <Input
                                    type="text"
                                    placeholder="Add Task"
                                    width="100%"
                                    margin="10px 0"
                                    borderRadius="5px"
                                    height="45px"
                                    value={task}
                                    onChange={(e) => setTask(e.target.value)}
                                /></span> <br /><br />

                            Task Manager        :<span className='float-r'>{TaskManager}</span>    <br /><br />

                            Status              : <span className='float-r'>{isApproved}</span>
                        </Card.Text>

                        <Button
                            name="Assign New Task"
                            color="#fff"
                            backgroundColor="#000"
                            padding="10px 24px"
                            textTransform="uppercase"
                            borderRadius="10px"
                            border="none"
                            onClick={Submit}
                        />
                    </Card.Body>
                </Card>
            </div>

        </div>
    )
}

export default AssignTask
