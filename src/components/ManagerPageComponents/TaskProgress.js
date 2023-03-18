import React from 'react'
import TaskCard from '../Leave/TaskCard'

const TaskProgress = () => {
    const Name="Rohit"
    const Email="rohit@gmail.com"
    const idKey="101"
    const Task="learn MERN Stack"
    const TaskManager="Rahul Sir"
    

  return (
    <div>
      <TaskCard Title="Task Status" isApproved={"In Progress"} Name={Name} 
      Email={Email} idKey={idKey} Task={Task} TaskManager={TaskManager} />
    </div>
  )
}

export default TaskProgress
