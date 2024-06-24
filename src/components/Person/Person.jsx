import React from 'react'
import './Person.css';

const Person = ({img1, sentence, p_desc, names, founder})=> {
  return (
    <div className='person_wrapper'>
      <img src={img1} alt="person 1" />
      <h2>{sentence}</h2>
      <p>{p_desc}</p>
      <div>
        <h2>{names}</h2>
        <span>{founder}</span>
      </div>
    </div>
  )
}

export default Person