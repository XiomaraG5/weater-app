
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { DataTime } from '../components/DataTime'


export const Weather = () => {
    const [value, setValue]=useState({
        city:"",
        data:[]
    })
    
    const handleChange=({target})=>{
        setValue({
            ...value,
            [target.name]:target.value
        })
    }
    const handleSubmit= (e)=>{
        e.preventDefault();
        axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${value}.json?access_token=pk.eyJ1IjoieGlvbWcxNTcwIiwiYSI6ImNsMDc3YmszcDBpNjgzcnJ1YW8zeGZuOWIifQ.RJnqEyce8d5qq92AJfKDZQ`)
        .then((res)=>{
            console.log(res.data.features[0].geometry.coordinates);
            const city =res.data.features[0].geometry.coordinates
            setValue({
                ...value,
                data:city
            })
        })
        .catch((err)=>{
            console.log(err.mesage);
        })
    }
    useEffect(()=>{},[handleSubmit])
    console.log(value.city);
  return (
    <div>
        <div className='dataforhour'>
        <h1>Weather App</h1>
        
        <form onSubmit={handleSubmit}>
            <input type="text" name='city' placeholder='Enter city' onChange={handleChange}/>
            <button type='submit'>look</button>
        </form>
        </div>
        <DataTime dat={value.data}/>
    </div>
  )
}
