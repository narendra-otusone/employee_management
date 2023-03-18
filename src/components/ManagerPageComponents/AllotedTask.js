import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';


const AllotedTask = () => {
    const [leaveStatus,setLeaveStatus]=useState("Pending")
    const list = [
        { _id: 1, EmployeeName: "Rohit", AllotedTask: "Login Page",leaveDesc:"Pending..." },
        { _id: 2, EmployeeName: "Virat", AllotedTask: "Logout Page",leaveDesc:"Accepted" },
        { _id: 3, EmployeeName: "Rahul", AllotedTask: "Signup Page",leaveDesc:"Not Apply" },
        { _id: 4, EmployeeName: "Shikhar", AllotedTask: "Home Page",leaveDesc:"Pending..." }



    ]

    const LeaveAction=()=>{
        console.log(leaveStatus)
    }
    console.log(leaveStatus)
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">S.No.</th>
                        <th scope="col">EmployeeName</th>
                        <th scope='col'> Alloted Task</th>
                        <th scope="col">Leave Decs</th>
                        <th scope='col'> Action</th>
                        <th scope='col'>Assign Task</th>
                        <th scope='col'>Check Task Progress</th>



                    </tr>
                </thead>
                <tbody>
                    {list.length > 0 ? (
                        list.map((employee, id) => (

                            <tr key={employee._id} >
                                <td>{id + 1}</td>
                                <td> {employee.EmployeeName} </td>
                                <td> {employee.AllotedTask} </td>
                                <td> {leaveStatus} </td>


                                <td>
                                        <input type="radio" name="gender" value="Accepted" onChange={(e)=>setLeaveStatus(e.target.value)} /> Accept Leave<br/>
                                        <input type="radio" name="gender" value="Rejected" onChange={(e)=>setLeaveStatus(e.target.value)} /> Reject Leave

                                </td>


                                        <td>
                                            <button className='btn btn-primary'> <NavLink to={'/assign/task/' + employee._id} className='text-decoration-none text-light'>Assign Task</NavLink></button>
                                        </td>
                                        <td>
                                            <button className='btn btn-danger'><NavLink to={'/check/taskprogress/:id' + employee._id} className='text-decoration-none text-light'>Check Task Progress</NavLink></button>
                                        </td>



                                    </tr>
                                    ))
                                    ) : <tr> <td> no employee</td></tr>}

                                </tbody>
                            </table>


        </div>
                )
}

                export default AllotedTask
