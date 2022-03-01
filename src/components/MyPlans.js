import { doc, getDoc, setDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { db } from '../firebase/FirebaseConfi'
import { PlanList } from './PlanList'

export const MyPlans = () => {
    const [plans,setPlans]=useState(null)
    const fakePlans=[
        {id:1, description: "plan fake 1", title:"title 1"},
        {id:2, description: "plan fake 2", title:"title 2"},
        {id:3, description: "plan fake 3", title:"title 3"}
    ]
    
    
    const state = useSelector(state=>state.login.email)
    const documentCreateOrLook = async (email)=>{
        const docRef = doc(db,`users/${email}`)
        const res= await getDoc(docRef)
       if(res.exists()){
            const docu = res.data()
            return docu.plans
       }else{
         setDoc(docRef,{plans:[...fakePlans]})

       }
    }
    useEffect(()=>{
       
    const fetchPlans= async()=>{
      const planeation= await documentCreateOrLook(state)
        setPlans(planeation)
    }
    fetchPlans()
    },[])
  return (
    <div>
        <h2 className=' text-center'>the perfect weather for your plans</h2>
        {/* <PlanList plans={plans} /> */}
    </div>
  )
}
