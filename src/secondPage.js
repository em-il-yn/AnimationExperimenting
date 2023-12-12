// SecondPage.js
import React from 'react';
import './secondStyles.css'; // Import your styles if needed
import HoverImage from './hoverMan.js';

const SecondPage = () => {
  return (
    <div className="second-page">
      <div className="button-container">
        <button className="image-button">
          <img
            src={process.env.PUBLIC_URL + '/secondButton.png'}
            alt="Second Button"
            style={{ width: '100px', height: 'auto' }}
          />
        </button>
        <div className="image-container">
          <HoverImage />
        </div>
      </div>
    </div>
  );
};

export default SecondPage;
