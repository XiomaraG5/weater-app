import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { DataForHour } from './DataForHour';

export const DataTime = (dat) => {
    const[minutely,setMinutely]=useState([])
    const[hourly, setHourly]=useState([])
    const[daily,setDaily]=useState([])
   const {data}=dat
    useEffect(()=>{
        
        axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${dat.dat[1]}&lon=${dat.dat[0]}&appid=1b9555eec44f6df00e5ec470a1786599`)
        .then((res)=>{
                setDaily(res.data.daily)
                setHourly(res.data.hourly)
                setMinutely(res.data.minutely)
        })
        .catch((err)=>{
            console.log(err.mesage);
        })
    },[dat])
    console.log(minutely);
    console.log(hourly);
    console.log(daily)
  return (
    <div>
        <DataForHour minutely={minutely}/>
        <div>
            <h2>weather today and tomorrow</h2>
            <div>
                {
                    hourly.map((e,i)=>
                    <div className='d-flex'>
                        <p>{`temp: ${e.temp}`}</p>
                        <p>{`Feels like: ${e.feels_like}`}</p>
                        <p>{`Humidity: ${e.humidity}`}</p>
                        <p>{`Pressure: ${e.pressure}`}</p>
                        <p>{`Visibility: ${e.visibility}`}</p>
                        <p>{`Wind deg: ${e.wind_deg}`}</p>
                        <p>{`Wind gust: ${e.wind_gust}`}</p>
                        <p>{`Wind speed: ${e.wind_speed}`}</p>
                        
                    </div>
                    )
                }
            </div>
        </div>
        <div>
            <h2>Weather next week</h2>
            <div className='dataforhour'>
            {
                daily.map(e=>
                    
                    <div className='d-flex'>
                   
                        <div>
                            <p>{`Temp: ${e.temp.morn} `}</p>
                            <p>{`Temp: ${e.temp.day} `}</p>
                            <p>{`Temp: ${e.temp.eve} `}</p>
                            <p>{`Temp: ${e.temp.night} `}</p>
                        </div>
                        
                        
                   
                        <div>
                            <p>{` Feel Like: ${e.feels_like.morn} in Morn`}</p>
                            <p>{` Feel Like: ${e.feels_like.day} in Day`}</p>
                            <p>{` Feel Like: ${e.feels_like.eve} in  Eve`}</p>
                            <p>{` Feel Like: ${e.feels_like.night} in Night`}</p>
                        </div>
                    
                    </div>
                    
                )
                
            }
            </div>
        </div>
    </div>
  )
}
