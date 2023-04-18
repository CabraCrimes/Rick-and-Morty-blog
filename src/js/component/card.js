import React from "react";
import { Favourite } from "./favourite";


export const Card = ({character}) => {
  
    return(
      <div className="card" style={{width: "18rem"}}> 
        <img src={character.image} className="card-img-top" alt={character.name}/>
        <div className="card-body">
          <h5 className="card-title">{character.name}</h5>
          <p className="card-text">{character.species}</p>
          <div>
            <Favourite character={character} />
          </div>
          <a href="#" className="btn btn-primary">Learn More</a>
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