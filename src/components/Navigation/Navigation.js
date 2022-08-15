import React from 'react';
import './Navigation.css';
import {NavLink} from "react-router-dom";

function Navigation({isActive, setIsActive}) {

    return (
        <nav className={isActive ? 'navigation active' : 'navigation'} onClick={() => setIsActive(false)}>
            <div className={isActive ? 'overlay' : ''}/>
            <div className="navigation__content" onClick={(evt) => evt.stopPropagation()}>
                <button className="navigation__close-button" onClick={() => setIsActive(false)}></button>
                <div className="navigation__top">
                    <NavLink className="navigation__link" to="/">
                        Главная
                    </NavLink>
                    <NavLink className="navigation__link" to="/movies">
                        Фильмы
                    </NavLink>
                    <NavLink className="navigation__link" to="/saved-movies">
                        Сохранённые фильмы
                    </NavLink>
                </div>
                <NavLink className="navigation__link navigation__link_bottom" to="/profile">
                    Аккаунт
                </NavLink>
            </div>
        </nav>
    );
}

export default Navigation;
