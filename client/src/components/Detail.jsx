import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import s from "./Detail.module.css";

const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    if (id){
    axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => {
        const data = response.data;
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert('No hay personajes con ese ID');
        }
      })
      .catch((error) => {
        console.log('error', error);
      });
    }
  }, [id]);
  

  return (
    <div className={s.div}>
    <h2>Name: {character.name}</h2>
    <h2>Status: {character.status}</h2>
    <h2>Species: {character.species}</h2>
    <h2>Gender: {character.gender}</h2>
    {character.origin && <h2>Origin: {character.origin.name}</h2>}
    <img src={character.image} alt={character.name} />
    </div>
  );
};

export default Detail;

