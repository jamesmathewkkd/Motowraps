import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ImageSlideShow: React.FC = () => {
  return (
    <Carousel autoPlay interval={4000} infiniteLoop>
      <div>
        <img src="img/svg/Slides/Solfilm/slide1.jpeg" alt="1" />
        <p className="legend">Solfilm</p>
      </div>
      <div>
        <img src="img/svg/Slides/Solfilm/slide2.jpeg" alt="2" />
        <p className="legend">Solfilm</p>
      </div>
      <div>
        <img src="img/svg/Slides/Solfilm/slide3.jpeg" alt="3" />
        <p className="legend">Solfilm</p>
      </div>
      <div>
        <img src="img/svg/Slides/Solfilm/slide4.jpeg" alt="4" />
        <p className="legend">Solfilm</p>
      </div>

    </Carousel>
  );
};

export default ImageSlideShow;