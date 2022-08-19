import React from 'react';
import {Link} from "react-router-dom";
import Logo from "../Logo/Logo";

function LoggedHeader() {

    return (
        <header className="header">
            <div className="header__logo-wrapper">
                <Logo/>
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
