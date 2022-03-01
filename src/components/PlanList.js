import { doc, getDoc, setDoc } from 'firebase/firestore';
import React from 'react'
import { useSelector } from 'react-redux'

export const PlanList = ({plans}) => {
    
  return (
    <div>
        <div className='d-flex flex-column p-5'>
            {plans.map((e)=>(
                <>
                <div className="d-flex gap-3">
                    <p className='text-center w-100'>{e.title} </p>
                    <p className='text-center w-100' > {e.description}</p>
                    <div className='d-flex w-50 gap-5'>
                        <i className="bi bi-trash"></i>
                        <i className="bi bi-pencil"></i>
                    </div>
                </div>
                < hr />
                </>
            ))}
        </div>
    </div>
  )
}
