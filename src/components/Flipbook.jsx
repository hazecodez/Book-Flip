import React from "react";
import HTMLFlipBook from "react-pageflip";
import "./flip.css";

const Flipbook = ({ images }) => {
  return (
    <div className="flipbook-container">
      <HTMLFlipBook width={390} height={550} showCover={true}>
        {images.map((src, index) => (
          <div key={index} className="page">
            <img src={src} alt={`Page ${index + 1}`} />
          </div>
        ))}
      </HTMLFlipBook>
    </div>
  );
};

export default Flipbook;
