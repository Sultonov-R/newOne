import React from 'react'
import './Amount.css';

const Amount=({pic, descr, wit})=> {
  return (
    <div className='amount-wrapper'>
        <img height={38} width={wit} src={pic} alt="amount" />
        <p>{descr}</p>
    </div>
  )
}

export default Amount