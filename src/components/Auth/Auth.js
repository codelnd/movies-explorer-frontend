import React from 'react';
import './Auth.css'
import {Link} from "react-router-dom";
import logo from "../../images/logo.svg";

const Auth = ({children, title, name, button, question, link, path}) => {
    return (
        <section className="auth">
            <Link to="/">
                <img className="logo logo_auth" alt="логотип" src={logo}/>
            </Link>
            <h2 className="auth__title">{title}</h2>
            <form className="auth__form" name={name} id={name}>
                {children}
            </form>
            <button className="auth__button" type="submit" form={name}>{button}</button>
            <div className="redirect">
                <p className="redirect__question">{question}</p>
                <Link className="redirect__link" to={path}>{link}</Link>
            </div>
        </section>
    );
};

export default Auth;
