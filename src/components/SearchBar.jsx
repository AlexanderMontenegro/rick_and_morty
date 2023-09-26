import React, {useState} from "react";
import s from "./SearchBar.module.css";


export default function SearchBar(props) {

   const [characterID, setCharacterID] = useState("");

   const handleSearch = () =>{
      props.onSearch(characterID);
      setCharacterID("");
   };

   return (
      <div className={s.nav} >
         <input  className={s.input} type='search' 
         placeholder="Buscar personaje por ID"
         value={characterID}
         onChange={(e) => setCharacterID(e.target.value)}/>


         <button className={s.button} onClick={handleSearch}>Agregar</button>
      </div>
   );
}
