import React, { useState } from 'react';
import './Register.css';
import FormInput from '../FormInput/FormInput';
import Auth from '../Auth/Auth';
import useValidation from '../../hooks/useValidation';

function Register({ onRegister, inputDisabled, confirm }) {
  const { error, isValid, checkErrors } = useValidation();
  const [userData, setUserData] = useState({});

  function handleUserData(name, value) {
    setUserData({ ...userData, [name]: value });
  }

  return (
    <Auth
      title="Добро пожаловать!"
      name="register"
      button="Зарегистрироваться"
      question="Уже зарегистрированы?"
      link="Войти"
      path="/signin"
      registerData={userData}
      confirm={confirm}
      onRegister={onRegister}
      isValid={isValid}
      checkErrors={checkErrors}
    >
      <FormInput
        type="text"
        name="name"
        labelText="Имя"
        minLength="2"
        maxLength="30"
        placeholder="Как Вас зовут?"
        onUserData={handleUserData}
        inputDisabled={inputDisabled}
      />
      <span className="auth__error-message">{error.name}</span>
      <FormInput
        type="email"
        name="email"
        labelText="E-mail"
        placeholder="Введите e-mail"
        onUserData={handleUserData}
        inputDisabled={inputDisabled}
      />
      <span className="auth__error-message">{error.email}</span>
      <FormInput
        type="password"
        name="password"
        labelText="Пароль"
        placeholder="Придумайте пароль"
        minLength="4"
        onUserData={handleUserData}
        inputDisabled={inputDisabled}
      />
      <span className="auth__error-message">{error.password}</span>
    </Auth>
  );
}

export default Register;
