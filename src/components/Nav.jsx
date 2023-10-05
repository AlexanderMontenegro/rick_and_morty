
import React from 'react';
import SearchBar from './SearchBar';
import { Link } from "react-router-dom";
import s from './Nav.module.css';


export default function Nav(props) {

   return (
      <div className={s.div}>

         <button className={s.buttonT}  onClick={props.logout}>Log Out</button> 
         
         <SearchBar onSearch={props.onSearch} />

         <Link to="/About" className={s.link}>
         <button className={s.buttonL}>
            ABOUT
        </button>
         </Link>

         <Link to="/Home" className={s.link} activeClassName={s.active}>
            <button className={s.buttonL}>
               HOME
           </button>
         </Link>

         <button  className= {s.buttonR} onClick={props.addRandomCharacter}>
            RANDOM
         </button>
      </div>
   );
}