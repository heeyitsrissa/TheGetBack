// src/AuthContext.jsx
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handlePinSubmit = (pin) => {
    const validPin = '718'; // Replace with your actual logic to check the pin
    if (pin === validPin) {
      setIsAuthenticated(true);
    } else {
      alert('Invalid PIN. Please try again.');
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, handlePinSubmit }}>
      {children}
    </AuthContext.Provider>
  );
};
