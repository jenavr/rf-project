import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img_1 from '../images/img_1.png';
import img_2 from '../images/img_2.png';
import img_3 from '../images/img_3.png';
import img_mapa from '../images/img_mapa.png';

  const CustomPrevArrow = (props) => (
    <button className="slick-prev" onClick={props.onClick}>
      Previous
    </button>
  );

 
  const CustomNextArrow = (props) => (
    <button className="slick-next" onClick={props.onClick}>
      Next
    </button>
  );



const Carousel = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <CustomPrevArrow />, // Custom previous arrow component
    nextArrow: <CustomNextArrow />, // Custom next arrow component
  };


  return (
    <div className="w-full h-full rounded overflow-hidden mt-12 relative">
      <Slider {...settings}>
        <div>
          <img
            src={img_1}
            alt="Imagen 1"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
          />
        </div>
        <div>
          <img
            src={img_2}
            alt="Imagen 2"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
          />
        </div>
        <div>
          <img
            src={img_3}
            alt="Imagen 3"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
          />
        </div>
        <div>
          <img
            src={img_mapa}
            alt="Imagen 3"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
          />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
