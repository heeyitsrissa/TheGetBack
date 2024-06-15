import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import logo from '../../public/logo/getback-logo.png'

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/" className="nav-link">Reel</Link>
        </li>
        <li>
          <Link to="/pitchdeck" className="nav-link">Pitch Deck</Link>
        </li>
        <li className="logo">
          <img src={logo} alt="Logo" className="logo-img" />
        </li>
        <li>
          <Link to="/script" className="nav-link">Script</Link>
        </li>
        <li>
          <Link to="/about" className="nav-link">About Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

