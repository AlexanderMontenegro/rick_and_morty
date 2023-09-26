import s from "./Card.module.css";

export default function Card(props) {
const {name, status, species, gender, origin, image, onClose} = props;


   return (
      <div className={s.card1} >
         <button className={s.button} onClick={onClose}><img  className={s.img2} src="img\portal.png" alt="Eliminar" /> </button>
         <h2 className= {s.name}>{name} </h2>
         <h2  className={s.datos} > Status: {status} </h2>
         <h2  className={s.datos} > Species: {species} </h2>
         <h2  className={s.datos} > Gender: {gender} </h2>
         <h2  className={s.datos} > Origin: {origin} </h2>
         <img className= {s.img} src={image} alt="imagen" />
      </div>
   );
}
