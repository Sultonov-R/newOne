import React from 'react'
import './Button.css';

const Button=({btn_title,  onClick, isActive })=> {
  return (
    <div className={`button-class ${isActive ? 'active' : ''}`}
    onClick={onClick}>
        <p>{btn_title}</p>
    </div>
  )
}

export default Button