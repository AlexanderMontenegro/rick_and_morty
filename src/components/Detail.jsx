import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import s from "./Detail.module.css";


const Detail = () => {
  const { id }  = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    if (id) { 
      fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.name) {
            setCharacter(data);
          } else {
            window.alert("No hay personajes con ese ID");
          }
        })
        .catch((error) => {
          console.log("error ", error);
        });
    }
  }, [id]);

  return (
    <div>
      <h2>{character.id}</h2>
      <h2>{character.name}</h2>
      <h3>{character.status}</h3>
      <h3>{character.species}</h3>
      <h3>{character.gender}</h3>
      {character.origin && <h3>{character.origin.name}</h3>}
      <img src={character.image} alt={character.name} />
      <br></br>
      <img className={s.img} src="\img\portal.png" alt="" />
    </div>
  );
};

export default Detail;
