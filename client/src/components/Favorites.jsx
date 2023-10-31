

import React, { useState } from "react";
import {  useDispatch } from "react-redux";
import { connect } from "react-redux";
import { filter, order, removeFav } from "../redux/actions";
import Card from "./Card";
import s from "./Favorites.module.css";

function Favorites({ myFavorites }) {
  const [aux, setAux] = useState(false);
  const dispatch = useDispatch();

  const handleOrder = (e) => {
    dispatch(order(e.target.value));
    setAux(!aux);
  };

  const handleFilter = (e) => {
    dispatch(filter(e.target.value.toString()));
  };

  return (
    <div>
      <div className={s.div}>
        <select className={s.selec} onChange={handleOrder}>
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select>

        <select className={s.selec} onChange={handleFilter}>
          <option value="Both">Todos</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <div className={s.div2}>
        {myFavorites.length > 0 ? (
          myFavorites.map(({ id, name, status, species, gender, origin, image }) => (
            <Card
              key={id}
              id={id}
              name={name}
              status={status}
              species={species.name}
              gender={gender}
              origin={origin}
              image={image}
              onClose={() => dispatch(removeFav(id))}
            />
          ))
        ) : (
          <p className={s.p}>No tienes personajes favoritos.</p>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps)(Favorites);
