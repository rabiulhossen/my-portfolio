import React from 'react'
import './Card.css'

export default function Card({pic,detail,heading}) {
  return (
   <div className="card">
<img src={pic} alt="" />
<span>{heading}</span>
<span>{detail}</span>
<button className='c-button'>Learn More</button>



   </div>
  )
}
