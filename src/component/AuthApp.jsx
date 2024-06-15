// src/AuthenticatedApp.jsx
import React from 'react';
import PinEntry from './PinEntry';
import { AuthProvider, useAuth } from '../context/AuthContext';
import App from '../App';
import NavBar from './NavBar';

const AuthenticatedApp = () => {
  return (
    <AuthProvider>
      <AuthWrapper />
    </AuthProvider>
  );
};

const AuthWrapper = () => {
  const { isAuthenticated, handlePinSubmit } = useAuth();

  return (
    <>
      {isAuthenticated ? (
        <>
          <NavBar />
          <App />
        </>
      ) : (
        <PinEntry onPinSubmit={handlePinSubmit} />
      )}
    </>
  );
};

export default AuthenticatedApp;
