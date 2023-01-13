import React from 'react'

function Section({name,type,count,onClick}) {
    return (
        <div onClick={onClick} className={`col-lg-4 params d-flex justify-content-between align-items-center ${type}` }>
            <b>{name}</b>
            <span className="number d-flex align-items-center justify-content-center">{count}</span>
        </div>
    )
}

export default Section
