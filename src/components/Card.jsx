
import React from "react";
import {Link} from "react-router-dom";
import s from "./Card.module.css";

export default function Card(props) {
const {id, name, status, species, gender, origin, image, onClose, characterId} = props;


const handleCloseClick =()=> {
   onClose(characterId);

};

   return (
      <div className={s.card1}>
      <button className={s.button} onClick={handleCloseClick}>
        <img className={s.img2} src="img\portal.png" alt="Eliminar" />
      </button>

      <Link to={`/detail/${id}`}>
        <h3 className={s.name}>{name}</h3>
      </Link>

      <h2 className={s.datos}> Status: {status} </h2>
      <h2 className={s.datos}> Species: {species} </h2>
      <h2 className={s.datos}> Gender: {gender} </h2>
      <h2 className={s.datos}> Origin: {origin} </h2>
      <img className={s.img} src={image} alt="imagen" />
    </div>
   );
}
