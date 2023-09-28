import React, { useState } from 'react';
import './App.css';
import Cards from './components/Cards.jsx';
import Nav from "./components/Nav.jsx";
import axios from "axios";




function App() {
   const [characters, setCharacters] = useState([]);

   function onClose(id) {
      const characterId = parseInt(id,10);
    
      const updatedCharacters = characters.filter((character) => character.id !== characterId);
       
      setCharacters(updatedCharacters);
    }

  const onSearch = async (id) =>{

   try {

      const response = await axios(`https://rickandmortyapi.com/api/character/${id}`);
      const data = response.data;

      if (data.name) {
      setCharacters((oldChars)=>[...oldChars, data]);
      }else{
      window.alert("No hay personaje con ese ID")  
      }
   } catch (error) {
      console.log("error en API", error);
   }

  
  }
   return (
      <div className='App'>
         <Nav onSearch= {onSearch} />
         <Cards characters={characters} />
      </div>
   );
}

export default App;
