import React from 'react'
import './Center.css'

const Center=({children,...rest})=>{
    return (
        <div className="center" {...rest}>
            {children}
        </div>
    )
} 

export default Center