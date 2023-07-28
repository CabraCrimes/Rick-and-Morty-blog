import React, { useContext } from "react";
import { Link } from "react-router-dom";
// import { Favourite } from "./favourite";
import { Context } from "../../store/appContext";
import "../../../styles/cards.css"

// Was CardLocation
export const LocationCard = ({ location }) => {
  const { store, actions } = useContext(Context);

  return (
    <div className="card mx-1 col" style={{ minWidth: "16rem" }}>
      <div className="card-body" style={{ width: "16rem" }}>
        <h5 className="card-title">{location.name}</h5>
        <p className="card-text">{location.id}</p>
        <p className="card-text">{location.type}</p>
        <p className="card-text">{location.dimension}</p>
        <p className="card-text">{location.url}</p>
        <p className="card-text">{location.created}</p>
        <div className="card-buttons d-flex justify-content-between">
          <button className={"btn " + (store.favourite.includes(location.name) ? "btn-primary" : "btn-outline-primary")}
            onClick={() => {
              actions.setFavorites(location.name)
            }}>
            <i className="fa-regular fa-heart"></i>
          </button>
          <Link to={"/single/" + location.id}>
            <button className="btn btn-success">Learn More</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

