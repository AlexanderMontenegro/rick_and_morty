import React from 'react';
import s from "./About.module.css"


export default function About() {
   return (
      <div className= {s.div} >
         <h1  className= {s.h1} >Acerca de mí</h1>
         <p   className={s.p} >Esta es mi aplicación de Rick & Morty. Soy el creador de esta app.</p>
        <img  className={s.img} src="img\portal.png" alt="" />
      </div>
   );
}
