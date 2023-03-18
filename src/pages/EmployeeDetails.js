import React, { useEffect, useState } from 'react'
// import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios'
import { useNavigate, NavLink } from 'react-router-dom';
import Button from '../UIcomponents/Button';



const EmployeeDetails = () => {
    const navigate = useNavigate()

    const [list, setList] = useState([
        { Name: "Rohit", Email: "rohit@gmail.com", _id: 101 },
        { Name: "Virat", Email: "virat@gmail.com", _id: 102 },
        { Name: "Rahul", Email: "rahul@gmail.com", _id: 103 }


    ])
    const handleDelete = (id) => {
        console.log("delete is clicked", id)
    }

    const handleEdit = () => {
        console.log("Edit action is being performed")
    }

    // const LoadData = async () => {
    //     const res = await axios.get(`/employeeList`, {
    //         headers: {
    //             "Content-Type": "application/json"
    //         }
    //     })
    //     console.log(res.data)
    //     if (res.status === 201) {
    //         await setList(res.data)
    //         // setTimeout(() => {
    //         //     setLoading(false)
    //         // }, 3000)
    //     } else {
    //         console.log("error")
    //     }
    // }

    // useEffect(()=>{
    //     LoadData()
    // },[])
    const RedirectApply = () => {
        navigate("/apply/leave")

    }
    const RedirectStatus=()=>{
        navigate("/check-leave/status")
    }

    const RedirectTask=()=>{
        navigate("/check/task")
    }

    const RedirectUpdateTask=()=>{
        navigate("/update/task/:id")
    }
    return (
        <div className='show container'>
            <div className='btn-style'>
                <Button
                    name="Apply Leave"
                    color="#fff"
                    backgroundColor="#000"
                    padding="10px 14px"
                    textTransform="uppercase"
                    borderRadius="10px"
                    border="none"
                    onClick={() => RedirectApply()}
                />

                {/* leave status */}
                <Button
                    name="Check Leave Status "
                    color="#fff"
                    backgroundColor="#000"
                    padding="10px 14px"
                    textTransform="uppercase"
                    borderRadius="10px"
                    border="none"
                    onClick={() => RedirectStatus()}
                />
                {/* check task */}
                <Button
                    name="Check Task"
                    color="#fff"
                    backgroundColor="#000"
                    padding="10px 14px"
                    textTransform="uppercase"
                    borderRadius="10px"
                    border="none"
                    onClick={() => RedirectTask()}
                />

                {/* Update Task */}
                <Button
                    name="Update Tasks"
                    color="#fff"
                    backgroundColor="#000"
                    padding="10px 14px"
                    textTransform="uppercase"
                    borderRadius="10px"
                    border="none"
                    onClick={()=>RedirectUpdateTask()}
                />

            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">S.No.</th>
                        <th scope="col">EmployeeName</th>
                        <th scope="col">Email</th>
                        <th scope="col">Update</th>
                        <th scope="col">Delete</th>


                    </tr>
                </thead>
                <tbody>
                    {list.length > 0 ? (
                        list.map((employee, id) => (

                            <tr key={employee._id} >
                                <td>{id + 1}</td>
                                <td> {employee.Name} </td>
                                <td>{employee.Email}</td>
                                <td>
                                    {/* <Link to='/update'> */}
                                    <button className='btn btn-primary' onClick={() => handleEdit(employee._id)}> <NavLink to={'/update/Employee/' + employee._id} className='text-decoration-none text-light'>UPDATE</NavLink></button>
                                    {/* </Link> */}
                                </td>
                                <td>
                                    <button className='btn btn-danger' onClick={() => handleDelete(employee._id)}>DELETE</button>
                                </td>



                            </tr>
                        ))
                    ) : <tr> <td> no employee</td></tr>}

                </tbody>
            </table>

        </div>
    )
}

export default EmployeeDetails

