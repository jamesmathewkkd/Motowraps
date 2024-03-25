import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ImageSlideShow: React.FC = () => {
  return (
    <Carousel autoPlay interval={4000} infiniteLoop>
      <div>
        <img src="img/svg/Slides/PPF/slide1.jpeg" alt="1" />
        <p className="legend">PPF</p>
      </div>
      <div>
        <img src="img/svg/Slides/PPF/slide2.jpeg" alt="2" />
        <p className="legend">PPF</p>
      </div>
      <div>
        <img src="img/svg/Slides/PPF/slide3.jpeg" alt="3" />
        <p className="legend">PPF</p>
      </div>
    </Carousel>
  );
};

export default ImageSlideShow;