import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { MyPlans } from '../components/MyPlans';
import {logoutAsyn} from '../redux/actions/actionLogin'
import { Weather } from './Weather';

export const Home = () => {
  
    const dispatch = useDispatch();
    const [list,setList]=useState(false)
  const handleLogout =()=>{
        dispatch(logoutAsyn())
    }
  return (
    <div >
    <div className='plans'>
    <p className='plans_p' onClick={()=>setList(true)}> 
      do you have any plans ? <button>
        <i className="bi bi-file-person"></i></button> 
    </p> 
    </div>
    <div>
      <div className='plans'>
    <p className='plans_p' onClick={()=>setList(false)}> 
      Go back  <button>
         <i className="bi bi-box-arrow-right"></i></button> 
    </p> 
    </div>
     <MyPlans/>
    </div>
    <div>
      <Weather/>
        <Button onClick={handleLogout}>
            Logout
        </Button>
    </div>
    </div>
  )
}
