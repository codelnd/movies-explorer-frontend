import React from 'react';
import './Auth.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import { motion } from 'framer-motion';

const Auth = ({
  children,
  title,
  name,
  button,
  question,
  link,
  path,
  checkErrors,
  isValid,
  onRegister,
  registerData,
  onLogin,
  loginData,
}) => {
  function handleRegisterSubmit(evt) {
    evt.preventDefault();
    onRegister(registerData);
  }

  function handleLoginSubmit(evt) {
    evt.preventDefault();
    onLogin(loginData);
  }

  return (
    <motion.section
      className="auth"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Link to="/" className="logo-link__auth">
        <img className="logo" src={logo} alt="логотип"></img>
      </Link>
      <h2 className="auth__title">{title}</h2>
      <form
        className={`auth__form auth__form_${name}`}
        onSubmit={name === 'login' ? handleLoginSubmit : handleRegisterSubmit}
        onChange={checkErrors}
        name={name}
        id={name}
      >
        {children}
      </form>
      <button
        className={`auth__button auth__button_${!isValid ? 'disabled' : ''}`}
        type="submit"
        form={name}
        disabled={!isValid}
      >
        {button}
      </button>
      <div className="redirect">
        <p className="redirect__question">{question}</p>
        <Link className="redirect__link" to={path}>
          {link}
        </Link>
      </div>
    </motion.section>
  );
};

export default Auth;
