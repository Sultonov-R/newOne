import React from 'react'
import './Card.css';

const Card=({image, title, description, witdh})=> {
  return (
   <div className='card-wrapper'>
    <img width={witdh} src={image} alt="image" />
    <h3>{title}</h3>
    <p>{description}</p>
   </div>
  )
}

export default Card