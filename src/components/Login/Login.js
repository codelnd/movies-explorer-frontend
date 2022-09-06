import { useState } from 'react';
import './Login.css';
import Auth from '../Auth/Auth';
import FormInput from '../FormInput/FormInput';
import useValidation from '../../hooks/useValidation';

function Login({ onLogin, inputDisabled }) {
  const { error, isValid, checkErrors } = useValidation();
  const [userData, setUserData] = useState({});

  function handleUserData(name, value) {
    setUserData({ ...userData, [name]: value });
  }

  return (
    <Auth
      title="Рады видеть!"
      name="login"
      button="Войти"
      question="Ещё не зарегистрированы?"
      link="Регистрация"
      path="/signup"
      isValid={isValid}
      checkErrors={checkErrors}
      loginData={userData}
      onLogin={onLogin}
    >
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
        placeholder="Введите пароль"
        onUserData={handleUserData}
        inputDisabled={inputDisabled}
      />
      <span className="auth__error-message">{error.password}</span>
    </Auth>
  );
}

export default Login;
