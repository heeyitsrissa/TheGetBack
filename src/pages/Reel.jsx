// src/pages/Reel.jsx
import React from 'react';
import { useAuth } from '../context/AuthContext';
import './Reel.css'; 


const Reel = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="reel-container">
      {isAuthenticated ? (
        <video autoPlay loop className="reel-video">
          <source src="/videos/GetBack-reel.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <h2>Please log in to view the video</h2>
      )}
    </div>
  );
};

export default Reel;
