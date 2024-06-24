import React from 'react'
import './Button.css';

const Button=({btn_title})=> {
  return (
    <div className='button-class'>
        <p>{btn_title}</p>
    </div>
  )
}

export default Button