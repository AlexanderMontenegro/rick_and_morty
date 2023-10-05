import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import s from "./Detail.module.css"


export default function Detail() {
   const [character, setCharacter] = useState({});
   const {id}=useParams();

   useEffect(() => {
      axios(`https://rickandmortyapi.com/api/character/${id}?key={alexandermontenegro@gmail.com}`).then(
         ({ data }) => {
            if (data.name) {
               setCharacter(data);
            } else {
               window.alert('No hay personajes con ese ID');
            }
         }
      );
      return setCharacter({});
   }, [id]);


   return(

      <div>

         <img className= {s.img} src="\img\portal.png" alt="" />

        
          <h1>{character.name}</h1>
          <p>Status: {character.status}</p>
          <p>Species: {character.species}</p>
          <p>Gender: {character.gender}</p>
          <p>Origin: {character.origin?.name}</p>
          <img src={character.image} alt={character.name} />
 
      </div>
   )



};
 