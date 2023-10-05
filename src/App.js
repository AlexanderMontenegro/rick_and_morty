import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';
import Detail from './components/Detail.jsx';
import About from './components/About.jsx';
import Error from './components/Error.jsx';
import Form from './components/Form.jsx';

function App() {

const [access, setAccess] = useState(false);
   const EMAIL = 'alexandermontenegro@gmail.com';
   const PASSWORD = 'Alemont';
   const navigate = useNavigate();

   const login = (userData) => {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
   };


     const logout = () => {
      setAccess(false);
      navigate('/');
   };

   useEffect(() => {
      !access && navigate('/');
   }, [access, navigate]);



   const [characters, setCharacters] = useState([]);

   function onClose(id) {
      const characterId = parseInt(id, 10);

      const updatedCharacters = characters.filter((character) => character.id !== characterId);

      setCharacters(updatedCharacters);
   };

   const location = useLocation();

   const onSearch = async (id) => {
      try {
         const response = await axios(`https://rickandmortyapi.com/api/character/${id}`);
         const data = response.data;

         if (data.name) {
     
            if (characters.some((character) => character.id === data.id)) {
               window.alert('¡El personaje ya está en la lista!');
            } else {
               setCharacters((oldChars) => [...oldChars, data]);
            }
         } else {
            window.alert('¡No hay personaje con ese ID!');
         }
      } catch (error) {
         console.log('error en API', error);
      }
   };

   const addRandomCharacter = async () => {
      const randomId = Math.floor(Math.random() * 826) + 1;

      try {
         const response = await axios(`https://rickandmortyapi.com/api/character/${randomId}`);
         const data = response.data;

         if (data.name) {
           
            if (characters.some((character) => character.id === data.id)) {
               window.alert('¡El personaje ya está en la lista!');
            } else {
               setCharacters((oldChars) => [...oldChars, data]);
            }
         } else {
            window.alert('¡No hay personaje con ese ID!');
         }
      } catch (error) {
         console.log('error en API', error);
      }
   };

   return (
      <div className='App'>
         {location.pathname !== "/" && <Nav onSearch={onSearch} addRandomCharacter= {addRandomCharacter} logout={logout} />}
 
         <Routes>
            <Route path="*" element={<Error />} />
            <Route path="/Home" element={<Cards characters={characters} onClose={onClose} addRandomCharacter={addRandomCharacter} />} />
            <Route path="/About" element={<About />} />
            <Route path="/Detail/:id" element={<Detail />} />
            <Route path='/' element={<Form login = {login} />} />
         </Routes>
      </div>
   );
}

export default App;



