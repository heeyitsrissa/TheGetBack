import React, { useState } from 'react';
import './PitchDeck.css'; // Import the CSS file for styling

// Import images
import slide1 from '/pitchdeck/pd-1.png';
import slide2 from '/pitchdeck/pd-2.png';
import slide3 from '/pitchdeck/pd-3.png';
import slide4 from '/pitchdeck/pd-4.png';
import slide5 from '/pitchdeck/pd-5.png';
import slide6 from '/pitchdeck/pd-6.png';
import slide7 from '/pitchdeck/pd-7.png';
import slide8 from '/pitchdeck/pd-8.png';
import slide9 from '/pitchdeck/pd-9.png';
import slide10 from '/pitchdeck/pd-10.png';
import slide11 from '/pitchdeck/pd-11.png';
import slide12 from '/pitchdeck/pd-12.png';
import slide13 from '/pitchdeck/pd-13.png';
import slide14 from '/pitchdeck/pd-14.png';
import slide15 from '/pitchdeck/pd-15.png';
// Add more imports as necessary

const slides = [
  slide1,
  slide2,
  slide3,
  slide4,
  slide5,
  slide6,
  slide7,
  slide8,
  slide9,
  slide10,
  slide11,
  slide12,
  slide13,
  slide14,
  slide15
];

const PitchDeck = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="pitch-deck-container">
      <div className="pdf-viewer">
        <div className="arrow left" onClick={prevSlide}>
          &#10094;
        </div>
        <img src={slides[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
        <div className="arrow right" onClick={nextSlide}>
          &#10095;
        </div>
      </div>
    </div>
  );
};

export default PitchDeck;