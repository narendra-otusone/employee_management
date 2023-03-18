import React, { useState } from 'react'
import Input from '../../UIcomponents/Input'
import Button from '../../UIcomponents/Button'
const ApplyLeave = () => {
    const [date,setDate]=useState("")
    const [fromDate,setFromDate]=useState("")
    const [toDate,setToDate]=useState("")

    const Submit=()=>{
        console.log("leave Application details are here= :",date,fromDate,toDate)
    }
    return (
        <div className='leave-form'>
            <div className='leave-card'>
                {/* <form> */}
                    <label>Date of Application</label>
                    <Input
                        type="date"
                        placeholder="select date"
                        width="100%"
                        margin="10px 0"
                        borderRadius="5px"
                        height="45px"
                        value={date}
                        onChange={(e)=>setDate(e.target.value)}
                    />

                    <label>Leave from</label>

                    <Input
                        type="date"
                        placeholder="leave from"
                        width="100%"
                        margin="10px 0"
                        borderRadius="5px"
                        height="45px"
                        value={fromDate}
                        onChange={(e)=>setFromDate(e.target.value)}
                    />

                    <label>Leave To</label>

                    <Input
                        type="date"
                        placeholder="leave from"
                        width="100%"
                        margin="10px 0"
                        borderRadius="5px"
                        height="45px"
                        value={toDate}
                        onChange={(e)=>setToDate(e.target.value)}
                    />
                <div className='btn-leave'>
                    <Button
                        name="Apply Leave"
                        color="#fff"
                        backgroundColor="#000"
                        padding="10px 14px"
                        textTransform="uppercase"
                        borderRadius="3px"
                        border="none"
                        onClick={Submit}
                    />
                </div>
                {/* </form> */}
            </div>
        </div>
    )
}

export default ApplyLeave
