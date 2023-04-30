import React from 'react'
import "./GigCard.scss"
import { Link } from "react-router-dom"

export const GigCard = ({item}) => {
  return (
<Link to="/gig/123" className='link'>
<div className="gigCard">
    <img src={item.img} alt='' />
    <div className="info">
    <div className="user">
        <img src={item.pp} />
        <span>{item.username}</span>
    </div>
    <p>{item.cat}</p>
    <div className="star">
        <img src='./src/assets/Gold_Star.svg.png'/>
        <span>{item.star}</span>
    </div>
    </div>
    <hr />
    <div className="details">
     <img src='./src/assets/gigsheart.png' alt='' />
     <div className="price">
     <span>STARTING AT</span>
     <h2>${item.price}</h2>
     </div>
    </div>
</div>
</Link>
  )
}
