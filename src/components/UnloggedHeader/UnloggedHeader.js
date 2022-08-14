import React from 'react';
import logo from '../../images/logo.svg'
import {Link} from "react-router-dom";

function LoggedHeader() {

    return (
        <header className="header">
            <div className="header__logo-wrapper">
                <Link to="/">
                    <img className="header__logo" alt="логотип" src={logo}/>
                </Link>
            </div>
            <div className="header-buttons">
                <Link to="/signup" className="header__link-underline">
                    <button className="header__signup-button">Регистрация</button>
                </Link>
                <Link to="/signin" className="header__link-underline">
                    <button className="header__signin-button">Войти</button>
                </Link>
            </div>
        </header>
    );
}

export default LoggedHeader;
