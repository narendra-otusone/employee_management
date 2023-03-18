import React from 'react'
import TaskCard from './TaskCard'

const TaskStatus = () => {
    const Name="Rohit"
    const Email="rohit@gmail.com"
    const idKey="101"
    const Task="learn MERN Stack"
    const TaskManager="Rahul Sir"
    

  return (
    <div>
      <TaskCard Title="Task Status" isApproved={"pending"} Name={Name} 
      Email={Email} idKey={idKey} Task={Task} TaskManager={TaskManager} />
    </div>
  )
}

export default TaskStatus
