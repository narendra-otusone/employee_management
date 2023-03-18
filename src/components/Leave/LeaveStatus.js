import React from 'react'
import Card from './Card'

const LeaveStatus = () => {
    const idKey="101"
    const Name="ABC"
    const Email="xyz@gmail.com"
    const From="18-03-2023"
    const To="20-03-2023"
  return (
    <div>
      <Card Title="Leave Status" isApproved="Approved" idKey={idKey} Email={Email} Name={Name} From={From} To={To} />
    </div>
  )
}

export default LeaveStatus
