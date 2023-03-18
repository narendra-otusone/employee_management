import React from 'react'

// import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'
import ProfileCard from '../components/ProfileComponent/ProfileCard';


const Profile = () => {
    // const navigate = useNavigate();
    const profile="Employee Profile Details"
    const { EmpName, Email, sequence, url, id}={EmpName:"abc",Email:"xyz@gmail.com",sequence:"123",url:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",id:101} 

//   const notify = () => toast("are you sure!");

    const handleDelete = async (id) => {
        console.log("deleted", id)
    }

    return (
        <div key={id}className="profile" >
          <ProfileCard Profile={profile} Pic={url} idKey={id} Name={EmpName} Email={Email} handleDelete={()=>handleDelete(id)} />
        </div>
    )
}

export default Profile

