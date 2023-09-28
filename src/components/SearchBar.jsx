import React, {useState} from "react";
import s from "./SearchBar.module.css";


export default function SearchBar(props) {

   const [id, setId] = useState("");

   const handleChange =(e) => {
      setId(e.target.value);
   };

   const handleSearch = () =>{
      props.onSearch(id);
      setId("");
   };

   return (
      <div className={s.nav} >
         
         <input  
         className={s.input} 
         type='search' 
         placeholder="Buscar personaje por ID"
         value={id}
         onChange={handleChange}/>


         <button className={s.button} onClick={handleSearch}>Agregar</button>
      </div>
   );
}
