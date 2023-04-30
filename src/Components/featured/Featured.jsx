import React from 'react'
import "./Featured.scss"

const Featured = () => {
  return (
    <div className='featured'>
        <div className="container">
            <div className="left">
                <h1>Find the Best <i>Freelance</i> <i>service</i>, for your work</h1>
                <div className="search">
                    <div className="searchInput">
                        <img src='./src/assets/search main.png' alt='' />
                        <input type='text' placeholder='Try AI services'/>
                    </div>
                    <button>Search</button>
                </div>
                <div className="popular">
                    <span>Popular:</span>
                    <button>AI services</button>
                    <button>Web Development</button>
                    <button>Logo Design</button>
                    <button>UI Design</button>
                </div>
            </div>
            <div className="right">
                <img src='./src/assets/hire main.png' alt='' />
            </div>
        </div>
    </div>
  )
}

export default Featured