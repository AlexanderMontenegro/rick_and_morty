
import React from 'react';
import SearchBar from './SearchBar';
import { Link, NavLink } from "react-router-dom";
import s from './Nav.module.css';


export default function Nav(props) {
   return (
      <div className={s.div}>
         <SearchBar onSearch={props.onSearch} />
         <Link to="/About" className={s.link}>

         <button className={s.buttonL}>
         <img  className={s.imgR} src="img\portalAbout.png" alt="About" />
         </button>
         </Link>

         <NavLink to="/home" className={s.link} activeClassName={s.active}>
          
            <button className={s.buttonL}>
            <img  className={s.imgR} src="img\portalHome.png" alt="Home" />
               </button>
         </NavLink>

         <button  className= {s.buttonR} onClick={props.addRandomCharacter}>
         <img  className={s.imgR} src="img\portalr.png" alt="Random" />
          </button>
      </div>
   );
}