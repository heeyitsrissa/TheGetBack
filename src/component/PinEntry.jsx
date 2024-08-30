import React, { useState, useEffect } from 'react';
import './PinEntry.css'; // Import the CSS file for styling

const PinEntry = ({ onPinSubmit }) => {
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');
  const [videoSrc, setVideoSrc] = useState('/videos/gb-login.mp4');

  useEffect(() => {
    // Detect screen width and change video source based on device
    const updateVideoSource = () => {
      const isMobileDevice = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      if (window.innerWidth <= 480 || isMobileDevice) {
        setVideoSrc('/videos/phone-media-background.mp4'); // Your smaller video for mobile
      } else {
        setVideoSrc('/videos/gb-login.mp4'); // Your larger video for desktop
      }
    };

    // Initial check
    updateVideoSource();

    // Add event listener to handle window resizing
    window.addEventListener('resize', updateVideoSource);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateVideoSource);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pin.length === 3) {
      onPinSubmit(pin);
    } else {
      setError('Please enter a valid 3-digit PIN.');
    }
  };

  return (
    <div className="pin-entry-container">
      <video autoPlay muted loop className="background-video">
        <source src={videoSrc} type="video/mp4" />
        {/* <source src={videoSrc} type="video/quicktime" /> */}
        Your browser does not support the video tag.
      </video>
      <div className="pin-entry-content">
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            maxLength="3"
          />
          <button type="submit">Purchase Stolen Card</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    </div>
  );
};

export default PinEntry;
