import React from 'react';
import './Logo.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

const Logo = () => {
  return (
    <Link to="/" className="logo-link">
      <div className="outer circle">
        <img className="logo" src={logo} alt="логотип"></img>
        <span></span>
        <span></span>
      </div>
    </Link>
  );
};

export default Logo;
