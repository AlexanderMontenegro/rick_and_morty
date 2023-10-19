import axios from 'axios';
import { useEffect, useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';

const access={  
    email: "alexandermontenegro@gmail.com",
    password : "Alemont",
    isLoged: false
    };

const useApp = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);

  const onSearch = async (id) => {

    const find = characters.find((character) => character.id === +id);
    console.log('find ', find);
    if (find) return window.alert("¡Este personaje ya fue agregado!");

  
    try {
        const response = await axios(`https://rickandmortyapi.com/api/character/${id}`);
      const data = response.data;

    

      if (data.name) {
        setCharacters([...characters, data]);
       
      } else {
        window.alert("¡No hay personajes con este ID!");
      }

    } catch (error) {
      console.log('error en api ', error);
    }
    
  };

  const onClose = (id) => {
  
    setCharacters(characters.filter((character) => character.id !== id));
  }

  const random = () => {
    const randomId = Math.floor(Math.random() * 825) + 1;
    onSearch(randomId);
  };

  const login = (data) => {
    console.log('login', data);

    if (data.email === access.email && data.password === access.password) {
      access.isLoged = true;
      navigate('/home');
    } else {
      window.alert('Usuario o contraseña incorrectos');
    }
  }

  const logout = () => {
    access.isLoged = false;
    navigate('/');
  }

  useEffect(() => {
    !access.isLoged && navigate('/');
  }, [access, navigate]);


  return {
    characters,
    onSearch,
    onClose,
    random,
    login,
    logout,
    pathname,
  }
}

export default useApp;