import React, { useEffect, useState } from 'react'
import Login from '../components/Login'
import Register from '../components/Register'

 const Launch = () => {
     const [Status,setStatus]=useState(false)
     
  return (
    <div>
        {Status?
        <div>
        <p onClick={()=>setStatus(false)}>
            Go to register
            <i className="bi bi-box-arrow-right"></i>
          </p>
        <Login/>
        </div> :<div>
            <p onClick={()=>setStatus(true)}>
               Go to login
               <i className="bi bi-box-arrow-right"></i>
            </p>
        <Register/>
        </div>}
    </div>
  )
}
export default Launch