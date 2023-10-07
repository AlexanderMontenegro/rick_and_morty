import React, { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav.jsx";
import Detail from "./components/Detail.jsx";
import About from "./components/About.jsx";
import Error from "./components/Error.jsx";
import Form from "./components/Form.jsx";
import Favorites from "./components/Favorites.jsx"

function App() {
  const [characters, setCharacters] = useState([]);


  const {pathname} = useLocation();

  const onSearch = async (id) => {
    try {
      const response = await axios(
        `https://rickandmortyapi.com/api/character/${id}`
      );
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



  const access={  
   email: "alexandermontenegro@gmail.com",
   password : "Alemont",
   isLoged: false
   };

  const navigate = useNavigate();

  const login = (userData) => {
    if (userData.password === access.password && userData.email === access.email) {
      access.isLoged=true;
      navigate("/home");
    } else {
      window.alert("Usuario o contraseña incorrectos");
    }
  };

  const logout = () => {
    access.isLoged=false;
    navigate("/");
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);


  const location = useLocation();


  const addRandomCharacter = async () => {
    const randomId = Math.floor(Math.random() * 826) + 1;

    try {
      const response = await axios(
        `https://rickandmortyapi.com/api/character/${randomId}`
      );
      const data = response.data;

      if (data.name) {
        if (characters.some((character) => character.id === data.id)) {
          window.alert("¡El personaje ya está en la lista!");
        } else {
          setCharacters((oldChars) => [...oldChars, data]);
        }
      } else {
        window.alert("¡No hay personaje con ese ID!");
      }
    } catch (error) {
      console.log("error en API", error);
    }
  };

  return (
    <div className="App">
      {pathname !== "/" && 
        <Nav
          onSearch={onSearch}
          logout={logout}
          addRandomCharacter={addRandomCharacter}
        />
      }

<Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route path="/Home" element={<Cards characters={characters} onClose={onClose} />} />
        <Route path="/About" element={<About />} />
        <Route path="/Detail/:id" element={<Detail />} />
        <Route path="/Favorites" element={<Favorites />} />
        <Route path="*" element={<Error />} />
       

      </Routes>
    </div>
  );
}

export default App;
