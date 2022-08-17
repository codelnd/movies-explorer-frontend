import React from 'react';
import './Register.css'
import logo from '../../images/logo.svg'

function Register() {
    return (
        <section className="register">
            <img className="header__logo" alt="логотип" src={logo}/>
            <h2 className="register__title">Добро пожаловать!</h2>
        </section>
    );
}

export default Register;



