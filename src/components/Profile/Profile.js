import React, { useContext, useEffect, useState } from 'react';
import './Profile.css';
import Header from '../Header/Header';
import { motion } from 'framer-motion';
import { CurrentUserContext } from '../CurrentUserContext/CurrentUserContext';
import { useLocation } from 'react-router-dom';
import useValidation from '../../hooks/useValidation';

function Profile({ loggedIn, onUpdate, onLogout }) {
  const currentUser = useContext(CurrentUserContext);
  const location = useLocation();
  const { checkErrors, isValid, setError, setIsValid } = useValidation();

  const [inputDisabled, setInputDisabled] = useState(true);
  const [inputValid, setInputValid] = useState(true);
  const [value, setValue] = useState({});

  useEffect(() => {
    if (location.pathname === '/profile') {
      setValue(currentUser);
    }
  }, [location]);

  useEffect(() => {
    if (
      value.username === currentUser.username &&
      value.email === currentUser.email
    ) {
      setIsValid(false);
    }
  }, [value]);

  function handleInput() {
    setInputDisabled(false);
    setIsValid(false);
  }

  function handleInputValue(evt) {
    setValue({ ...value, [evt.target.name]: evt.target.value });
    if (evt.target.checkValidity()) {
      setInputValid(true);
    } else {
      setInputValid(false);
    }
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    setInputDisabled(true);
    onUpdate({ name: value.username, email: value.email });
  }

  function handleClose() {
    setValue(currentUser);
    setError({});
    setInputValid(true);
    setInputDisabled(true);
  }

  function handleLogout() {
    onLogout(currentUser.email);
  }

  return (
    <>
      <Header loggedIn={loggedIn} />
      <motion.section
        className="profile"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <h2 className="profile__title">{`Привет, ${currentUser.username}!`}</h2>
        <form
          className="profile__form"
          id="profile"
          name="profile"
          onChange={checkErrors}
          onSubmit={handleSubmit}
        >
          <label className="profile__label profile__label_name">
            Имя
            <input
              className={`input-profile input-profile_${
                inputValid ? '' : 'error'
              } input-profile_type_name`}
              type="text"
              placeholder="Введите имя"
              name="username"
              minLength="2"
              maxLength="30"
              required
              autoComplete="off"
              value={value.username || ''}
              disabled={inputDisabled}
              onChange={handleInputValue}
            />
          </label>
          <label className="profile__label profile__label_email">
            E-mail
            <input
              className={`input-profile input-profile_${
                inputValid ? '' : 'error'
              } input-input-profile_type_email`}
              type="email"
              placeholder="Введите e-mail"
              name="email"
              required
              autoComplete="off"
              value={value.email || ''}
              disabled={inputDisabled}
              onChange={handleInputValue}
            />
          </label>
        </form>
        <div className="profile__buttons">
          <button
            type="submit"
            form="profile"
            disabled={!isValid}
            className={`profile__button profile__button_${
              !inputDisabled ? '' : 'invisible'
            } profile__button_save profile__button_save_${
              !isValid ? 'disabled' : ''
            }`}
          >
            Сохранить
          </button>
          <button
            type="button"
            className={`profile__button profile__button_${
              !inputDisabled ? '' : 'invisible'
            } profile__button_cancel`}
            onClick={handleClose}
          >
            Отмена
          </button>
          <button
            type="button"
            className="profile__button profile__button_edit"
            onClick={handleInput}
          >
            Редактировать
          </button>
          <button
            type="button"
            className="profile__button profile__button_logout"
            onClick={handleLogout}
          >
            Выйти из аккаунта
          </button>
        </div>
      </motion.section>
    </>
  );
}

export default Profile;
