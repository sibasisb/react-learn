import React from 'react'
import './inputElement.css'

const InputElement=({variant="large",children,...rest})=>{
    return (
        <input className={`input ${variant}`} type="text" value={children} {...rest}/>
    )
}

export default InputElement