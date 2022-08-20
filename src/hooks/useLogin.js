import { useState } from "react";
import { useNavigate } from 'react-router-dom'

function useLogin() {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);

  function login() {
    setLoggedIn(true);
  }

  function logout() {
    setLoggedIn(false);
    navigate('/');
  }

  return { loggedIn, login, logout }
}

export default useLogin;
