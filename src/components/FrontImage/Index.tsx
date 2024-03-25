import React, { useState, useEffect } from 'react';
import { withTranslation } from "react-i18next";
import { Fade } from "react-awesome-reveal";

import {
  ServiceWrapper
} from "./styles";

interface Image {
  url: string;
  alt: string;
}

// import { Title,footer } from "./styles";

const FadeImages: React.FC = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Fetch image data (replace with your actual data fetching logic)
  useEffect(() => {
    const imageData: Image[] = [
      { url: 'img/svg/developer4.jpeg', alt: '' },
    //   { url: './img/svg/developer2.jpeg', alt: '' },
    //   { url: './img/svg/developer1.jpg', alt: 'image3' },
    ];
    setImages(imageData);
  }, []);

  // Handle image transition
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % images.length
      );
    }, 0); // Change interval (in milliseconds) to adjust fade speed

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <Fade direction="right">
    {/* <ServiceWrapper>  */}
    <div>
      {images.map((image, index) => (
        <img
          key={image.url}
          src={image.url}
          alt={image.alt}
          style={{ opacity: index === currentImageIndex ? 1 : 0, transition: 'opacity 1s ease-in-out', 
          width: '100%', objectFit: 'fill'}}
          
          className={index === currentImageIndex ? 'active' : ''}
        />
      ))}
      </div>
    {/* </ServiceWrapper>  */}
    </Fade>
  );
};

export default withTranslation()(FadeImages);
// export default FadeImages;
