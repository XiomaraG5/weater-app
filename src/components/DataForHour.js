import React, { useEffect } from 'react'

export const DataForHour = ({minutely}) => {
    useEffect(()=>{},[minutely])
  return (
    <div className='dataforhour'>
        <h2>weather for the next hour</h2>
        <div className='dataforhour_titles'>
            <div className='d-flex gap-5'>
                <p>Minutes</p><p>Precipitation</p>
            </div>
        </div>
        <div className='dataforhour_time'>
            {
                minutely.map((e,i)=>(
                    <>
                    <div className='d-flex gap-5 dataforhour_time_show'>
                        <span>{i}</span>
                     
                        <span>{e.precipitation}</span>
                    </div>
                    </>
                ))
            }
        </div>

    </div>
  )
}
