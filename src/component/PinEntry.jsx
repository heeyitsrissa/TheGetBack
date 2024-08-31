import React, { useState } from 'react';
import './PinEntry.css'; // Import the CSS file for styling

const PinEntry = ({ onPinSubmit }) => {
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');

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
      <video autoPlay muted loop playsInline className="background-video" id="backgroundVideo">
        <source src="/videos/gb-login.mp4" type="video/mp4" />
        <source src="/videos/phone-media-background.mov" type="video/quicktime" />
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
