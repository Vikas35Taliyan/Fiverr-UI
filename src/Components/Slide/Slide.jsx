import React from 'react'
import "./Slide.scss"
// import { Carousel } from 'react-responsive-carousel';
// import CarouselSlider from "react-carousel-slider"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CatCard from "../../Components/CatCard/CatCard"
import { cards } from "../../data"


const Slide = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4
  };
  return (
    <div className='slide'>
    <div className="container">
        <Slider {...settings}>
          {cards.map((card) =>(
            <CatCard item={card} key={card.id} />
          ))}
        </Slider>
    </div>
    </div>
  )
}

export default Slide