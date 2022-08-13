import React from 'react';
import {Link, Route, Switch} from "react-router-dom";
import logo from '../../images/logo.svg'
import './Header.css'

function Header() {
    return (
        <header className="header">
            <Switch>
                <Route exact path="/">
                    <Link to="/">
                        <img className="header__logo" alt="логотип" src={logo}/>
                    </Link>
                    <div className="header-buttons">
                        <button className="header__signup-button">Регистрация</button>
                        <button className="header__signin-button">Войти</button>
                    </div>
                </Route>
                <Route path="/movies">
                    <div className="header__logo-wrapper">
                        <Link to="/">
                            <img className="header__logo" alt="логотип" src={logo}/>
                        </Link>
                        <button className="header__films-button">Фильмы</button>
                        <button className="header__saved_films-button">Сохранённые фильмы</button>
                    </div>
                    <div className="header-buttons">
                        <button className="header__account-button">Аккаунт</button>
                    </div>
                </Route>
            </Switch>
        </header>

    );
}

export default Header;
