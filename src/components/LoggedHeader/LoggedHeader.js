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
                <Link to="/movies" className="header__link-underline">
                    <button className="header__films-button">Фильмы</button>
                </Link>
                <Link to="/saved-movies" className="header__link-underline">
                    <button className="header__saved_films-button">Сохранённые фильмы</button>
                </Link>
            </div>
            <div className="header-buttons">
                <Link to="/profile" className="header__link-underline">
                    <button className="header__account-button">Аккаунт</button>
                </Link>
            </div>
        </header>
    );
}

export default LoggedHeader;
