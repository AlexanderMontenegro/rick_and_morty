import React from 'react';
import Card from './Card';
import s  from "./Cards.module.css"

export default function Cards(props) {

   const {characters, onClose} = props;
   
   return (
   <div className={s.div} >
      {characters.map((character) => (
         <Card className={s.card}
          key={character.id}
          name={character.name}
          status={character.status}
          species={character.species}
          gender={character.gender}
          origin={character.origin.name}
          image={character.image}
          onClose={onClose}
          characterId={character.id}
        />
      ))}
   </div>
   );
}
