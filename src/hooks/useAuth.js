import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getUser, login, logout, register, updateUser } from '../utils/MainApi';
import useLocalStorage from './useLocalStorage';
import { getAllMovies } from '../utils/MoviesApi';

function useAuth() {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const [authError, setAuthError] = useState('');
  const [inputDisabled, setInputDisabled] = useState(false);
  const [filmsCollection, setFilmsCollection] = useLocalStorage(
    [],
    'collection'
  );
  const pathAuth =
    location.pathname === '/signup' || location.pathname === '/signin';

  useEffect(() => {
    checkAuth();
  }, []);

  useEffect(() => {
    if (loggedIn) {
      getUser()
        .then((user) => {
          setCurrentUser({
            _id: user._id,
            username: user.name,
            email: user.email,
          });
          checkPath();
        })
        .catch((err) => {
          setAuthError(err.message);
          setPopupOpen(true);
        });
    }
  }, [loggedIn]);

  function getFilmsCollection() {
    getAllMovies()
      .then((res) => {
        setFilmsCollection(res);
      })
      .catch((err) => {
        setAuthError(err.message);
        setPopupOpen(true);
      });
  }

  function checkPath() {
    if (pathAuth) {
      navigate('/');
    } else {
      navigate(location.pathname);
    }
  }

  function checkAuth() {
    if (localStorage.getItem('email')) {
      getUser()
        .then(() => {
          setLoggedIn(true);
          checkPath();
        })
        .catch((err) => {
          setAuthError(err.message);
          setPopupOpen(true);
        });
    }
  }

  function handleRegister({ username, email, password }) {
    setInputDisabled(true);
    register(username, email, password)
      .then((res) => {
        if (res._id) {
          setConfirm(true);
          setPopupOpen(true);
          setTimeout(() => {
            setConfirm(false);
            setPopupOpen(false);
          }, 1500);
          handleLogin({ email, password });
        } else {
          setConfirm(false);
          setPopupOpen(true);
        }
      })
      .catch((err) => {
        setAuthError(err.message);
        setConfirm(false);
        setPopupOpen(true);
      })
      .finally(() => setInputDisabled(false));
  }

  function handleLogin({ email, password }) {
    setInputDisabled(true);
    login(email, password)
      .then((res) => {
        if (res.email) {
          checkAuth();
          getFilmsCollection();
          navigate('/movies');
        }
      })
      .catch((err) => {
        setAuthError(err.message);
        setPopupOpen(true);
      })
      .finally(() => setInputDisabled(false));
  }

  function handleLogout(email) {
    logout(email)
      .then(() => {
        localStorage.clear();
        setLoggedIn(false);
        navigate('/');
      })
      .catch((err) => {
        setAuthError(err.message);
        setPopupOpen(true);
      });
  }

  function handleUpdateUser({ name, email }) {
    setInputDisabled(true);
    updateUser(name, email)
      .then((data) => {
        setCurrentUser({
          ...currentUser,
          username: data.name,
          email: data.email,
        });
        localStorage.setItem('email', data.email);
        setConfirm(true);
        setPopupOpen(true);
        setTimeout(() => {
          setConfirm(false);
          setPopupOpen(false);
        }, 1500);
      })
      .catch((err) => {
        setAuthError(err.message);
        setConfirm(false);
        setPopupOpen(true);
      })
      .finally(() => setInputDisabled(false));
  }

  return {
    loggedIn,
    confirm,
    popupOpen,
    setPopupOpen,
    authError,
    currentUser,
    inputDisabled,
    filmsCollection,
    handleRegister,
    handleLogin,
    handleLogout,
    handleUpdateUser,
  };
}

export default useAuth;
