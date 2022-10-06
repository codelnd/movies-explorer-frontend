import React from 'react';
import './Register.css';
import FormInput from '../FormInput/FormInput';
import Auth from '../Auth/Auth';

function Register({ loggedIn, login }) {
  return (
    <Auth
      title="Добро пожаловать!"
      name="register"
      button="Зарегистрироваться"
      question="Уже зарегистрированы?"
      link="Войти"
      path="/signin"
      loggedIn={loggedIn}
      login={login}
    >
      <FormInput
        type="text"
        name="name"
        labelText="Имя"
        minLength="2"
        maxLength="30"
        placeholder="Как Вас зовут?"
      />
      <span className="auth__error-message auth__error-message_invisible">
        Что-то пошло не так...
      </span>
      <FormInput
        type="email"
        name="email"
        labelText="E-mail"
        placeholder="Введите e-mail"
      />
      <span className="auth__error-message auth__error-message_invisible">
        Что-то пошло не так...
      </span>
      <FormInput
        type="password"
        name="password"
        labelText="Пароль"
        placeholder="Придумайте пароль"
      />
      <span className="auth__error-message auth__error-message_invisible">
        Что-то пошло не так...
      </span>
    </Auth>
  );
}

export default Register;
