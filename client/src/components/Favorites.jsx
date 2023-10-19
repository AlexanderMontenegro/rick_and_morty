import React, { useState } from "react";
import { connect, useSelector } from "react-redux";
import Card from "./Card";
import { filter, order, removeFav } from "../redux/actions";
import { useDispatch } from "react-redux";
import s from "./Favorites.module.css";

function Favorites() {
  const [aux, setAux] = useState(false);

  const myFavorites = useSelector((state) => state.myFavorites);

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
          <option value="Todos">Todos</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </select>
      </div>
      <div>
        {myFavorites.length > 0 ? (
          myFavorites.map(
            ({key, id, name, status, species, gender, origin, image }) => (
              <Card
                key={id}
                id={id}
                name={name}
                status={status}
                species={species}
                gender={gender}
                origin={origin.name}
                image={image}
                onClose={() => dispatch(removeFav(id))}
              />
            )
          )
        ) : (
          <p>No tienes personajes favoritos.</p>
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
