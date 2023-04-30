import React, { useEffect, useState } from 'react'
import { Link, useLocation } from "react-router-dom"
import "./Navbar.scss"


const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const{pathname} = useLocation()

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  }
  useEffect(() => {
  window.addEventListener("scroll", isActive)

  return () => {
    window.removeEventListener("scroll", isActive)
  }
  }, []);

  const currentUser = {
    id: 1,
    username: "vikas",
    isSeller: true,
  }
  return (
    <div className={active || pathname !=="/" ?  "navbar active" : "navbar"}>
        <div className="container">
            <div className="logo">
              <Link to="/" className='link'>
                <span className='hire'>Hire</span>
              </Link>
                <span className='dot'>.</span>
            </div>
            <div className="links">
                <span>Hire Business</span>
                <span>Explore</span>
                <span>English</span>
                {/* <span>Became a Seller</span> */}
                <span>Sign In</span>
                {!currentUser ?.isSeller && <span>Became a Seller</span>}
                {!currentUser && <button>Join</button>}
                {currentUser && (
                  <div className='user' onClick={() => setOpen(!open)}>
                    <span>
                      <img src='./src/assets/nav.png' alt='' />
                      {currentUser?.username}
                    </span>
                   {open && <div className="options">
                      {
                        currentUser?.isSeller && (
                          <>
                          <Link className='link' to="myGigs">Gigs</Link>
                          <Link className='link' to="/add">Add new Gig</Link>
                          </>
                        )
                      }
                      <Link className='link' to="/orders">Orders</Link>
                      <Link className='link' to="/messages">Messages</Link>
                      <Link className='link' to="">Logout</Link>
                    </div>}
                  </div>
                )}
            </div>
        </div>
        {(active || pathname !=="/") && (
        <>
        <hr />
        <div className="menu">
          <Link className='link menuLink' to="/">Graphics & Design</Link>
          <Link className='link' to="/">Digital Marketing</Link>
          <Link className='link' to="/">Writing & Translation</Link>
          <Link className='link' to="/">Video & Animation</Link>
          <Link className='link' to="/">Digital Marketing</Link>
          <Link className='link' to="/">Programming & Tech</Link>
          <Link className='link' to="/">Photography</Link>
          <Link className='link' to="/">Business</Link>
          <Link className='link' to="/">AI Services</Link>
        </div>
        </>
        )
}
    </div>
  );
};
export default Navbar
