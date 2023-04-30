import React from 'react'
import "./CatCard.scss"
import { Link } from "react-router-dom"

const CatCard = ({item}) => {
  return (
    <Link to="/">
    <div className='catCard'>
        <img src={item.img} alt='' />
        <span className='desc'>{item.desc}</span>
        <span className='head'>{item.head}</span>
    </div>
    </Link>
  )
}

export default CatCard