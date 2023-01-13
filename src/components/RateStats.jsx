import React from 'react'

function RateStats({value}) {

    const rating = value && value.toFixed(1);
    const color = rating >= 7 ? '#1DB205' : rating <= 5 ? '#f72b2b' : '#FFB700';


    return (
        <div className="rate">
            <span style={{color:`${color}`}} >{rating}</span>
        </div> 
    )
}

export default RateStats
