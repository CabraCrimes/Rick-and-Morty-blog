import React, { useContext } from "react";
import { Link } from "react-router-dom";
// import { Favourite } from "./favourite";
import { Context } from "../../store/appContext";
import "../../../styles/cards.css"

  // Was CardEpisode
export const EpisodeCard = ({ episode }) => {
  const { store, actions } = useContext(Context);

  return (
    <div className="card mx-1 col" style={{ minWidth: "16rem" }}>
      <div className="card-body">
        <h5 className="card-title">Name: {episode.name}</h5>
        <p className="card-text">Episode: {episode.episode}</p>
        <p className="card-text">Aired: {episode.air_date}</p>
        <p className="card-text">Created: {episode.created}</p>
        {/* <p className="card-title">{episode.url}</p> */}
        <div className="d-flex justify-content-between">
        <button className={"btn " + (store.favourite.includes(episode.name) ? "btn-primary" : "btn-outline-primary")}
            onClick={() => {
              actions.setFavorites(episode.name)
            }}>
            <i className="fa-regular fa-heart"></i>
          </button>
          <Link to={"/single/" + episode.id}>
            <button className="btn btn-success">Learn More</button>
          </Link>
        </div>
      </div>
    </div>
  )
}