// App.js
import React, { useState } from 'react';
import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';
import About from './components/About.jsx';
import Detail from "./components/Detail.jsx"
import axios from 'axios';
import { Routes, Route }  from 'react-router-dom';

function App() {
   const [characters, setCharacters] = useState([]);

   function onClose(id) {
      const characterId = parseInt(id, 10);

      const updatedCharacters = characters.filter((character) => character.id !== characterId);

      setCharacters(updatedCharacters);
   }

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
         <Nav onSearch={onSearch} addRandomCharacter= {addRandomCharacter} />
 
         <Routes>
            <Route path="/Home" element={<Cards characters={characters} onClose={onClose} addRandomCharacter={addRandomCharacter} />} />
            <Route path="/About" element={<About />} />
            <Route path="/detail/:id" element={<Detail />} />
           
         </Routes>
      </div>
   );
}

export default App;



