import React from 'react'
import "./Home.scss"
import Featured from "../../Components/featured/Featured"
import TrustedBy from "../../Components/trustedby/TrustedBy"
import Slide from "../../Components/Slide/Slide"
import { cards } from "../../data"
import CatCard from "../../Components/CatCard/CatCard"
import { projects } from "../../data"
import ProjectCard from "../../Components/projectCard/ProjectCard"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4
  };
  return (
    <div className='home'>
      <Featured />
      <TrustedBy />
      <Slide {...settings}>
        {cards.map((card)=>(
          <CatCard key={card.id} item={card}/>
        ))}
      </Slide>
      <div className="features">
        <div className="container">
          <div className="item">
            <h1>The best part? Everything.</h1>
            <div className="title">
              <img src='./src/assets/icons8-ok-32.png' />
              <span>Stick to your budget</span>
            </div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, in?</p>
            <div className="title">
              <img src='./src/assets/icons8-ok-32.png' />
              <span>Get quality work done quikly</span>
            </div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, in?</p>
            <div className="title">
              <img src='./src/assets/icons8-ok-32.png' />
              <span>Pay when you're happy</span>
            </div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, in?</p>
            <div className="title">
              <img src='./src/assets/icons8-ok-32.png' />
              <span>Count on 24/7 support</span>
            </div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, in?</p>
          </div>
          <div className="item">
            <video src='./src/assets/icons8-ok-32.png' controls></video>
          </div>
        </div>
      </div>
      {/* second */}
      <div className="features dark">
        <div className="container">
          <div className="item">
           <h1>Hire Bussinesses</h1>
           <h1>A solution built for business</h1>
           {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> */}
           <div className="title">
            <img src='./src/assets/icons8-ok-32.png' />
            Talent matching
           </div>
           <div className="title">
            <img src='./src/assets/icons8-ok-32.png' />
            Dedicated account management
           </div>
           <div className="title">
            <img src='./src/assets/icons8-ok-32.png' />
            Team collaboration tools
           </div>
           <button>Explore Hire Bussiness</button>
          </div>
          <div className="item">
            <img src='./src/assets/business-desktop-870-x1.webp' alt='' />
          </div>
        </div>
      </div>
      {/* third */}
      <Slider {...settings}>
        {projects.map((project) => (
          <ProjectCard key={project.id} item={project} />
        ))}
      </Slider>
    </div>
  )
}

export default Home