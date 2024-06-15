import React from 'react';
import './Script.css';

// Import images
import page1 from '/script/script-1.png';
import page2 from '/script/script-2.png';
import page3 from '/script/script-3.png';
import page4 from '/script/script-4.png';
import page5 from '/script/script-5.png';
import page6 from '/script/script-6.png';
import page7 from '/script/script-7.png';
import page8 from '/script/script-8.png';
import page9 from '/script/script-9.png';
import page10 from '/script/script-10.png';
import page11 from '/script/script-11.png';
import page12 from '/script/script-12.png';
import page13 from '/script/script-13.png';
import page14 from '/script/script-14.png';
import page15 from '/script/script-15.png';
import page16 from '/script/script-16.png';
import page17 from '/script/script-17.png';
import page18 from '/script/script-18.png';
import page19 from '/script/script-19.png';
import page20 from '/script/script-20.png';
import page21 from '/script/script-21.png';
import page22 from '/script/script-22.png';
import page23 from '/script/script-23.png';
import page24 from '/script/script-24.png';
import page25 from '/script/script-25.png';
import page26 from '/script/script-26.png';
import page27 from '/script/script-27.png';
import page28 from '/script/script-28.png';
import page29 from '/script/script-29.png';
import page30 from '/script/script-30.png';
import page31 from '/script/script-31.png';
import page32 from '/script/script-32.png';
import page33 from '/script/script-33.png';
import page34 from '/script/script-34.png';
import page35 from '/script/script-35.png';
import page36 from '/script/script-36.png';
import page37 from '/script/script-37.png';
import page38 from '/script/script-38.png';
import page39 from '/script/script-39.png';
import page40 from '/script/script-40.png';
import page41 from '/script/script-41.png';

const slides = [
  page1, page2, page3, page4, page5, page6, page7, page8, page9, page10,
  page11, page12, page13, page14, page15, page16, page17, page18, page19,
  page20, page21, page22, page23, page24, page25, page26, page27, page28,
  page29, page30, page31, page32, page33, page34, page35, page36, page37,
  page38, page39, page40, page41
];

const Script = () => {
  return (
    <div className="script-container">
      {slides.map((slide, index) => (
        <img 
          key={index} 
          src={slide} 
          alt={`Script page ${index + 1}`} 
          className="script-image" 
        />
      ))}
    </div>
  );
};

export default Script;
