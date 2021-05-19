import React from 'react'
import PropTypes from 'prop-types'
import './CustomButton.css'

const CustomButton=(props)=>{
    const {variant="primary",children,...rest}=props
    return (
        <button className={`button ${variant}`} {...rest}>
            {children}
        </button>
    )
}

CustomButton.propTypes={
    variant:PropTypes.string.isRequired
}

export default CustomButton