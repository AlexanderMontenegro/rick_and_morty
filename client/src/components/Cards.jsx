import React,{useEffect} from 'react';
import Card from './Card';
import s  from "./Cards.module.css"
import {useAccess} from './../Hooks/useAccess'
import { useNavigate } from "react-router-dom";

export default function Cards(props) {

   const navigate = useNavigate();

   const {isLoggedIn} = useAccess()
   const {characters, onClose} = props;
   useEffect(() => {
      console.log(isLoggedIn)
      if(!isLoggedIn){
         navigate('/')
      } ;
      
    },[isLoggedIn,navigate] );
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
