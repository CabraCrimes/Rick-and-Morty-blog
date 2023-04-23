import React from "react";
import { Link } from "react-router-dom";
import { Favourite } from "./favourite";


export const Card = ({character}) => {
  
    return(
      <div className="card col" style={{width: "18rem"}}> 
        <img src={character.image} className="card-img-top" alt={character.name}/>
        <div className="card-body">
          <h5 className="card-title">Name: {character.name}</h5>
          <p className="card-text">Species: {character.species}</p>
          <p className="card-text">Status: {character.status}</p>
          <div className="d-flex justify-content-between">
            <Favourite character={character} />
            <Link to={"/single/" + character.id}>
              <button className="btn btn-success">Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    )
}

export const CardLocation = ({location}) => {
  
  return(
    <div className="card" style={{width: "18rem"}}> 
      <div className="card-body">
        <h5 className="card-title">{location.name}</h5>
        <p className="card-text">{location.id}</p>
        <p className="card-text">{location.type}</p>
        <p className="card-text">{location.dimension}</p>
        <p className="card-text">{location.url}</p>
        <p className="card-text">{location.created}</p>
        <a href="#" className="btn btn-primary">Fav</a>
        <a href="#" className="btn btn-primary">Learn More</a>
      </div>
    </div>
  )
}

export const CardEpisode = ({episode}) => {
  
  return(
    <div className="card" style={{width: "18rem"}}> 
      <div className="card-body">
        <h5 className="card-title">{episode.name}</h5>
        <p className="card-text">{episode.episode}</p>
        <p className="card-text">{episode.air_date}</p>
        <p className="card-text">{episode.created}</p>
        <p className="card-title">{episode.url}</p>
        <a href="#" className="btn btn-primary">Fav</a>
        <a href="#" className="btn btn-primary">Learn More</a>
      </div>
    </div>
  )
}