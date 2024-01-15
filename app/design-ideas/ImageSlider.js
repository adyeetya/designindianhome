// ImageSlider.jsx
import React from 'react';

const ImageSlider = ({ images, currentIndex, onClose }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <div className="image-slider">
      <div className="slider-container">
        {images.map((image, index) => (
          <div key={index} className={`slider-item ${index === currentIndex ? 'active' : ''}`}>
            <img src={`https://api.designindianwardrobe.com/uploads/${image.filename}`} alt={image.filename} />
          </div>
        ))}
      </div>
      <button className="close-button" onClick={handleClose}>
        Close
      </button>
    </div>
  );
};

export default ImageSlider;
