import React, { useState, useEffect } from "react";
import { Link} from "react-router-dom";
import { connect } from "react-redux";
import { addFav, removeFav } from "../redux/actions";
import s from "./Card.module.css";
import { useDispatch } from "react-redux";




function Card(props) {
  const { id, name, status, species, gender, origin, image, onClose, characterId, myFavorites } = props;
  const dispatch = useDispatch();
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      dispatch(removeFav(id));
      setIsFav(false);
    } else {
      dispatch(addFav(props));
      setIsFav(true);
    }
  };

  const handleCloseClick = () => {
    onClose(characterId);
    dispatch(removeFav(id));
  };
  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [myFavorites, props.id]);

  return (
    <div className={s.card1}>
 


      <button className={s.button} onClick={handleCloseClick}>
        <img className={s.img2} src="img\portal.png" alt="Eliminar" />
      </button>
      
      <Link to={`/detail/${id}`} className={s.link}>
        <h3 className={s.name}>{name}</h3>
      </Link>

      {isFav ? (
        <button  className={s.buttonF} onClick={handleFavorite}>❤️</button>
        ) : (
          <button  className={s.buttonF2} onClick={handleFavorite}>🤍</button>
          )}

      <h2 className={s.datos}> Status: {status} </h2>
      <h2 className={s.datos}> Species: {species} </h2>
      <h2 className={s.datos}> Gender: {gender} </h2>
      <h2 className={s.datos}> Origin: {origin} </h2>
      <img className={s.img} src={image} alt="imagen" />

        

    </div>
  );
}

const mapStateToProps = (state) => {
  return { myFavorites: state.myFavorites };
};


export default connect(mapStateToProps, { addFav, removeFav })(Card);