// Main.js
import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <main className="main-container">
      <div className="image-container">
        <img
          src={process.env.PUBLIC_URL + '/hoverImage.png'}
          alt="Main Image"
          className="hover-image"
        />
      </div>
    </main>
  );
};

export default Main;