import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { login, logout, register } from '../utils/MainApi';
import useTooltip from './useTooltip';

const UseAuth = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const pathAuth =
    location.pathname === '/signup' || location.pathname === '/signin';

  const {
    isConfirm: authConfirm,
    isPopupOpen: authPopup,
    isError: authError,
    changePopup: changeAuthPopup,
    changeConfirm: changeAuthConfirm,
    changeError: changeAuthError,
  } = useTooltip();

  function checkPath() {
    if (pathAuth) {
      navigate('/');
    } else {
      navigate(location.pathname);
    }
  }

  function checkAuth() {
    if (localStorage.getItem('email')) {
      setLoggedIn(true);
    }
  }

  function handleRegister({ username, email, password }) {
    register(username, email, password)
      .then((res) => {
        if (res._id) {
          changeAuthConfirm(true);
          changeAuthPopup(true);
          setTimeout(() => changeAuthPopup(false), 3000);
          handleLogin({ email, password });
        } else {
          changeAuthConfirm(false);
          changeAuthPopup(true);
        }
      })
      .catch((err) => {
        changeAuthError(err.message);
        changeAuthConfirm(false);
        changeAuthPopup(true);
      });
  }

  function handleLogin({ email, password }) {
    login(email, password)
      .then((res) => {
        if (res.email) {
          localStorage.setItem('email', email);
          checkAuth();
          navigate('/movies');
        }
      })
      .catch((err) => {
        changeAuthError(err.message);
        changeAuthPopup(true);
      });
  }

  function handleLogout(email) {
    logout(email)
      .then(() => {
        localStorage.clear();
        setLoggedIn(false);
        navigate('/');
      })
      .catch((err) => {
        changeAuthError(err.message);
        changeAuthPopup(true);
      });
  }

  return {
    loggedIn,
    authConfirm,
    authPopup,
    authError,
    checkAuth,
    checkPath,
    changeAuthPopup,
    handleRegister,
    handleLogin,
    handleLogout,
  };
};

export default UseAuth;
