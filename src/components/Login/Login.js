import React from 'react';
import './Login.css'
import Auth from "../Auth/Auth";
import FormInput from "../FormInput/FormInput";

function Login({loggedIn, login}) {
    return (
        <Auth title='Рады видеть!' name='login' button='Войти' question='Ещё не зарегистрированы?' link='Регистрация' path='/signup' loggedIn={loggedIn} login={login}>
            <FormInput type='email' name='email' labelText='E-mail'
                       placeholder='Введите e-mail'/>
            <span className="auth__error-message auth__error-message_invisible">Что-то пошло не так...</span>
            <FormInput type='password' name='password' labelText='Пароль'
                       placeholder='Введите пароль'/>
            <span className="auth__error-message auth__error-message_invisible">Что-то пошло не так...</span>
        </Auth>
    );
}

export default Login;



