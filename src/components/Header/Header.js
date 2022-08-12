import React from 'react';
import logo from '../../images/logo.svg'
import './Header.css'

function Header() {
    return (
        <header className="header">
            <a href="index.html">
            <img className="header__logo" alt="логотип" src={logo}/>
            </a>
            <div className="header-buttons">
            <button className="header__signup_button">Регистрация</button>
            <button className="header__signin_button">Войти</button>
            </div>
        </header>
    );
}

export default Header;
