import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Favourite } from "./favourite";
import { Context } from "../store/appContext";

export const Card = ({ character }) => {
  const { store, actions } = useContext(Context);

  return (
    <div className="card mx-1 col" style={{ minWidth: "16rem" }}>
      <img src={character.image} className="card-img-top" alt={character.name} />
      <div className="card-body">
        <h5 className="card-title">Name: {character.name}</h5>
        <p className="card-text">Species: {character.species}</p>
        <p className="card-text">Status: {character.status}</p>
        <div className="d-flex justify-content-between">
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
  )
}

export const CardLocation = ({ location }) => {
  return (
    <div className="card mx-1 col" style={{ minWidth: "16rem" }}>
      <div className="card-body" style={{ width: "16rem" }}>
        <h5 className="card-title">{location.name}</h5>
        <p className="card-text">{location.id}</p>
        <p className="card-text">{location.type}</p>
        <p className="card-text">{location.dimension}</p>
        <p className="card-text">{location.url}</p>
        <p className="card-text">{location.created}</p>
        <div className="d-flex justify-content-between">
          <Favourite location={location} />
          <Link to={"/single/" + location.id}>
            <button className="btn btn-success">Learn More</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export const CardEpisode = ({ episode }) => {

  return (
    <div className="card mx-1 col" style={{ minWidth: "16rem" }}>
      <div className="card-body">
        <h5 className="card-title">{episode.name}</h5>
        <p className="card-text">{episode.episode}</p>
        <p className="card-text">{episode.air_date}</p>
        <p className="card-text">{episode.created}</p>
        <p className="card-title">{episode.url}</p>
        <div className="d-flex justify-content-between">
          <Favourite episode={episode} />
          <Link to={"/single/" + episode.id}>
            <button className="btn btn-success">Learn More</button>
          </Link>
        </div>
      </div>
    </div>
  )
}