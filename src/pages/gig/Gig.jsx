import React from 'react'
import "./Gig.scss"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Gig = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4
  };

  return (
    <div className="gig">
      <div className="container">
        <div className="left">
          <span className="creadCrumbs">Hire's- Graphics & Design-</span>
          <h2>I will create AI Generated art for you</h2>
          <div className="user">
            <img src='../src/assets/gig3.webp' alt='' className='main' />
            <span>Vikas singh</span>
            <div className="stars">
              <img src='../src/assets/Gold_Star.svg.png' alt='' />
              <img src='../src/assets/Gold_Star.svg.png' alt='' />
              <img src='../src/assets/Gold_Star.svg.png' alt='' />
              <img src='../src/assets/Gold_Star.svg.png' alt='' />
              <span>4</span>
            </div>
          </div>
          <Slider {...settings} className='slider'>
            <img src='../src/assets/gigs2.webp' alt='' />
            <img src='../src/assets/gig3.webp' alt='' />
            <img src='../src/assets/gig4.webp' alt='' />
          </Slider>
          <h2>About this Gig</h2>
          <p>I use AI to generate illustrations that best fit your marketing needs. Tell me about your brand and current marketing campaign, and I will use Artificial Intelligence to produce the perfect illustrations for your campaign.</p>
         <div className="seller">
          <h2>About the Seller</h2>
          <div className="user">
            <img src='../src/assets/gig3.webp' alt='' className='pp' />
            <div className="info">
              <span>Vikas singh</span>
              <div className="stars">
              <img src="../src/assets/Gold_Star.svg.png" alt='' />
              <img src='../src/assets/Gold_Star.svg.png' alt='' />
              <img src='../src/assets/Gold_Star.svg.png' alt='' />
              <img src='../src/assets/Gold_Star.svg.png' alt='' />
              <span>4</span>
              </div>
              <button>Contact Me</button>
            </div>
          </div>
          <div className="box">
            <div className="items">
              <div className="item">
                <span className="title">From</span>
                <span className="desc">USA</span>
              </div>
              <div className="item">
                <span className="title">Avg. response time</span>
                <span className="desc">4 hour</span>
              </div>
              <div className="item">
                <span className="title">Languages</span>
                <span className="desc">English</span>
              </div>
              <div className="item">
                <span className="title">Member since</span>
                <span className="desc">Aug 2022</span>
              </div>
              <div className="item">
                <span className="title">Last delivery</span>
                <span className="desc">1 day</span>
              </div>
            </div>
            <hr/>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, quod!</p>
          </div>
         </div>
          <div className="reviews">
            <h2>Reviews</h2>
            <div className="item">
              <div className="user">
                <img src='../src/assets/spickex.webp' alt='' className='pp' />
                <div className="info">
                  <span>vikas singh</span>
                  <div className="country">
                    <img src='../src/assets/usa.jpg' alt=''/>
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="stars">
              <img src='../src/assets/Gold_Star.svg.png' alt='' />
              <img src='../src/assets/Gold_Star.svg.png' alt='' />
              <img src='../src/assets/Gold_Star.svg.png' alt='' />
              <img src='../src/assets/Gold_Star.svg.png' alt='' />
              <span>4</span>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, dolore.</p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src='../src/assets/icons8-facebook-like-24.png' alt='' />
                <span>Yes</span>
                <img src='../src/assets/icons8-thumbs-down-24.png' alt='' />
                <span>No</span>
              </div>
            </div>
            <hr/>
{/* 2 */}
<div className="item">
              <div className="user">
                <img src='../src/assets/spickex.webp' alt='' className='pp' />
                <div className="info">
                  <span>vikas singh</span>
                  <div className="country">
                    <img src='../src/assets/usa.jpg' alt=''/>
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="stars">
              <img src='../src/assets/Gold_Star.svg.png' alt='' />
              <img src='../src/assets/Gold_Star.svg.png' alt='' />
              <img src='../src/assets/Gold_Star.svg.png' alt='' />
              <img src='../src/assets/Gold_Star.svg.png' alt='' />
              <span>4</span>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, dolore.</p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src='../src/assets/icons8-facebook-like-24.png' alt='' />
                <span>Yes</span>
                <img src='../src/assets/icons8-thumbs-down-24.png' alt='' />
                <span>No</span>
              </div>
            </div>
            <hr/>
{/* end */}
{/* 3 */}
<div className="item">
              <div className="user">
                <img src='../src/assets/spickex.webp' alt='' className='pp' />
                <div className="info">
                  <span>vikas singh</span>
                  <div className="country">
                    <img src='../src/assets/usa.jpg' alt=''/>
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="stars">
              <img src='../src/assets/Gold_Star.svg.png' alt='' />
              <img src='../src/assets/Gold_Star.svg.png' alt='' />
              <img src='../src/assets/Gold_Star.svg.png' alt='' />
              <img src='../src/assets/Gold_Star.svg.png' alt='' />
              <span>4</span>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, dolore.</p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src='../src/assets/icons8-facebook-like-24.png' alt='' />
                <span>Yes</span>
                <img src='../src/assets/icons8-thumbs-down-24.png' alt='' />
                <span>No</span>
              </div>
            </div>
            <hr/>
{/* end */}
          </div>
        </div>
        <div className="right">
          <div className="price">
            <h3>1 AI generated image</h3>
            <h2>$ 59.99</h2>
          </div>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, expedita doloremque debitis ad iusto laudantium molestias, tenetur accusamus autem, veniam consequatur earum voluptas!</p>
          <div className="details">
            <div className="item">
            <img src='../src/assets/icons8-time-30.png' alt='' />
            <span>2 days delivery</span>
            </div>
            <div className="item">
            <img src='../src/assets/icons8-replace-24.png' alt='' />
            <span>3 Revisions</span>
            </div>
          </div>
          <div className="features">
            <div className="item">
              <img src='../src/assets/icons8-ok-48.png' alt='' />
              <span>Prompt writing</span>
            </div>
            <div className="item">
              <img src='../src/assets/icons8-ok-48.png' alt='' />
              <span>Prompt writing</span>
            </div>
            <div className="item">
              <img src='../src/assets/icons8-ok-48.png' alt='' />
              <span>Prompt writing</span>
            </div>
            <div className="item">
              <img src='../src/assets/icons8-ok-48.png' alt='' />
              <span>Prompt writing</span>
            </div>
          </div>
          <button>Continue</button>
        </div>
      </div>
    </div>
  )
}