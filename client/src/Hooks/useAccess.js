
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const useAccess = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const access = {
    email: "alexandermontenegro@gmail.com",
    password: "Alemont",
    isLogged: false,
  };

  const login = (data) => {

    const response = axios.post('http://localhost:3001/home', {
      email: data.email,
      password: data.password
    },{  headers: {
      'Content-Type': 'application/json'
    }})
    .then(function (response) {
      console.log(response);

      if (response.data.isLoged ) {
        access.isLogin= true;
        setIsLoggedIn(true);
        setUser(data.email);

        navigate('/home')
      } else {
        window.alert("Usuario o contraseña incorrectos ");
      }
    })
    .catch(function (error) {
      console.log(error);
    });
    
  };


  const logout = () => {
    access.isLoggedIn = false;
    setIsLoggedIn(false);
    setUser(null);
  };

  return {
    isLoggedIn,
    user,
    login,
    logout,
    access,
  };
};
