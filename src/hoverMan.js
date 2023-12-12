// HoverImage.js
import React, { useState } from 'react';
import './HoverImage.css';

const HoverImage = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  return (
    <img
      src={process.env.PUBLIC_URL + '../public/hoverImage.png'}
      alt="Hover Image"
      className={`hover-image ${isHovered ? 'hovered' : ''}`}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    />
  );
};

export default HoverImage;
