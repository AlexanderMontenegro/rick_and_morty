import React from 'react';
import s from "./About.module.css"


export default function About() {
   return (

      <div className={s.div}>

               <h1 className={s.h1}>Acerca de Mí</h1>
                  <br></br>
               <p className={s.p1}>
               ¡Hola! <br></br>Soy Alexander Montenegro
               </p>
               <br></br>
               <p className={s.p}>
              Soy estudiante de programación, he participado en varios proyectos personales y colaborativos, donde he tenido la oportunidad de aplicar mis conocimientos en JavaScript, DOM y React. Estos proyectos han ampliado mi comprensión y habilidades en el desarrollo web.
               </p>

                <br></br>

               <p className={s.p}>
                 Lo que me motiva cada día es la posibilidad de aprender algo nuevo y enfrentar desafíos técnicos. Siempre estoy buscando oportunidades para mejorar mis habilidades y contribuir al mundo de la tecnología de la información.
               </p>

                <br></br>
            
               <ul>
                <li><a href="https://mail.google.com/alexandermontenegro0691@gmail.com">Gmail</a></li>
                <li><a href="https://web.whatsapp.com/1134252407">WhatsApp</a></li>
                <li><a href="https://www.linkedin.com/in/alexander-montenegro/">LinkedIn</a></li>
                <li><a href="https://github.com/AlexanderMontenegro">GitHub</a></li>
               </ul>


      </div>
 
   );
}  
