import './slide_2.css'


import React  from 'react';
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import S1 from '../../../Assets/s1.png'
import S2 from '../../../Assets/s2.png'
import S3 from '../../../Assets/s3.png'
import S4 from '../../../Assets/s4.png'
import S5 from '../../../Assets/s5.png'

const ReactSlick = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  }
  return (
    <div className="slider-container">
      <Slider {...settings}>
       
          <img className = "images_slide" src = {S1} alt = "slide1" />

         
        <img className = "images_slide" src = {S2} alt = "slide2" />
       
          
        <img className = "images_slide" src = {S3} alt = "slide3" />
        
        
        <img className = "images_slide" src = {S4} alt = "slide4" />
       
        
        <img className = "images_slide" src = {S5} alt = "slide5" />
    
      </Slider>
    </div>
  )
}

export default ReactSlick;




