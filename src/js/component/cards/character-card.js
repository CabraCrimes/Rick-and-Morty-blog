import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Favourite } from "../favourite";
import { Context } from "../../store/appContext";
import "../../../styles/cards.css"

// Was Card
export const CharacterCard = ({ character }) => {
  const { store, actions } = useContext(Context);

  return (
    <div className="col">
      <div className="card mx-1 " style={{ minWidth: "16rem" }}>
        <img src={character.image} className="card-img-top" alt={character.name} />
        <div className="card-body">
          <p className="card-title">Name: {character.name}</p>
          <p className="card-text">Species: {character.species}</p>
          <p className="card-text">Status: {character.status}</p>

        </div>
        <div className="card-footer">
          <div className="card-buttons d-flex justify-content-between">
            <button className={"btn " + (store.favourite.includes(character.name) ? "btn-primary" : "btn-outline-primary")}
              onClick={() => {
                actions.setFavorites(character.name)
              }}>
              <i className="fa-regular fa-heart"></i>
            </button>
            <Link to={"/single/" + character.id}>
              <button className="btn btn-success">Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

