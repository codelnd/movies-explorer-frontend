import React from 'react';
import './Logo.css'
import {Link} from "react-router-dom";
import logo from "../../images/logo.svg";

const Logo = () => {
    return (
      <Link to="/" className="logo-link">
        <img className="logo" src={logo} alt="логотип"></img>
      </Link>
    );
};

export default Logo;
