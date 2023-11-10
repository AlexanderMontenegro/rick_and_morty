
import { useState } from 'react';

export const useAccess = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);


  const access={  
    email: "alexandermontenegro@gmail.com",
    password : "Alemont",
    isLoged: false
    };

  const login = (username, password) => {
    console.log('login', data);

    if (data.email === access.email && data.password === access.password) {
      access.isLoged = true;
      navigate('/home');
    } else {
      window.alert('Usuario o contraseña incorrectos');
    }
    setIsLoggedIn(true);
    setUser(username);
  };

  const logout = () => {
    access.isLoged = false;
    navigate('/');
    setIsLoggedIn(false);
    setUser(null);
  };

  return {
    isLoggedIn,
    user,
    login,
    logout,
  };
};
