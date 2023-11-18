import React, { useReducer} from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useAccess } from "./Hooks/useAccess.js";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav.jsx";
import Detail from "./components/Detail.jsx";
import About from "./components/About.jsx";
import Error from "./components/Error.jsx";
import Form from "./components/Form.jsx";
import Favorites from "./components/Favorites.jsx";
import "./App.css";
import axios from "axios";

function App() {
  const [characters, setCharacters] = useReducer([]);

  const { pathname } = useLocation();

  const onSearch = async (id) => {
    try {
      const response = await axios(
        "http://localhost:3001/rickandmorty/character/:id"
      );
      const data = response.data;

      if (data.name) {
        setCharacters([...characters, data]);
      } else {
        window.alert("¡No hay personajes con este ID!");
      }
    } catch (error) {
      console.log("error en api ", error.response ? error.response.data : error.message);
      window.alert("Hubo un error al buscar el personaje.");
    }
  };

  const onClose = (id) => {
    setCharacters(characters.filter((character) => character.id !== id));
  };

 

  const navigate = useNavigate();

  const access = useAccess();


  const logout = () => {
    access.isLogged = false;
    navigate("/");
  };




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
      {pathname !== "/" && (
        <Nav
          onSearch={onSearch}
          logout={logout}
          addRandomCharacter={addRandomCharacter}
        />
      )}

      <Routes>
        <Route path="/" element={<Form/>} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;