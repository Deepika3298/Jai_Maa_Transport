import React from 'react'

function Heading({ heading, containerClass }) {
    return (
        <div className={`${containerClass} mb-5`} style={{ width: "fit-content"}}>
            <h2 className='fw-bold'>{heading}</h2>
            <div style={{ borderBottom: '3px solid var(--primary)', }}></div>
        </div>
    )
}

export default Heading