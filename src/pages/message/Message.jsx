import React from 'react'
import "./Message.scss"
import { Link } from "react-router-dom"

const Message = () => {
  return (
    <div className="message">
      <div className="container">
        <span className="creadcrumbs">
          <Link to="/messages/">MESSAGES</Link>- VIKAS -
        </span>
        <div className="messages">
          <div className="item">
            <img src='../src/assets/pride-flag-designify.png' alt=''/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eius aperiam tempora a nesciunt tempore, distinctio nulla reprehenderit aliquam eaque, officiis voluptatum? Doloribus assumenda doloremque vero consequatur. Nisi, mollitia illo!</p>
          </div>
          <div className="item owner">
            <img src='../src/assets/pride-flag-designify.png' alt=''/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eius aperiam tempora a nesciunt tempore, distinctio nulla reprehenderit aliquam eaque, officiis voluptatum? Doloribus assumenda doloremque vero consequatur. Nisi, mollitia illo!</p>
          </div>
          <div className="item">
            <img src='../src/assets/pride-flag-designify.png' alt=''/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eius aperiam tempora a nesciunt tempore, distinctio nulla reprehenderit aliquam eaque, officiis voluptatum? Doloribus assumenda doloremque vero consequatur. Nisi, mollitia illo!</p>
          </div>
          <div className="item owner">
            <img src='../src/assets/pride-flag-designify.png' alt=''/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eius aperiam tempora a nesciunt tempore, distinctio nulla reprehenderit aliquam eaque, officiis voluptatum? Doloribus assumenda doloremque vero consequatur. Nisi, mollitia illo!</p>
          </div>
          <div className="item">
            <img src='../src/assets/pride-flag-designify.png' alt=''/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eius aperiam tempora a nesciunt tempore, distinctio nulla reprehenderit aliquam eaque, officiis voluptatum? Doloribus assumenda doloremque vero consequatur. Nisi, mollitia illo!</p>
          </div>
          <div className="item owner">
            <img src='../src/assets/pride-flag-designify.png' alt=''/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eius aperiam tempora a nesciunt tempore, distinctio nulla reprehenderit aliquam eaque, officiis voluptatum? Doloribus assumenda doloremque vero consequatur. Nisi, mollitia illo!</p>
          </div>
        </div>
        <hr/>
        <div className="write">
          <textarea name='' id='' cols={30} rows={10} placeholder='write a message'></textarea>
          <button>Send</button>
        </div>
      </div>
    </div>
  )
}

export default Message