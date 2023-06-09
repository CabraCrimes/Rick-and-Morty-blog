import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Card } from "../component/card"
import { CardLocation } from "../component/card"
import { CardEpisode } from "../component/card";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const allCarousels = ["character", "episodes", "location"]

	return (
		<div className="container d-flex mx-auto row text-center mt-5">

			<h1 className="mb-5">Home Page</h1>

			{/* Character*/}
			<Link to="/characters">
				<h2>Characters</h2>
			</Link>
			{/* <div className="row row-cols-sx-1 row-cols-sm-3 row-cols-md-5 mt-5 "> */}
			<div className="d-flex overflow-auto mb-5">
				{store.character.map((newChar) => {
					return <Card key={newChar.id} character={newChar} />
				})}
				<button className="btn btn-info" onClick={()=>{
					actions.getCharacter()
				}}>Load More</button>
			</div>

				{/* Location */}
				<Link to="/location">
				<h2>Locations</h2>
				</Link>
			<div className="d-flex overflow-auto mb-5">
				{store.location.map((newLoc) => {
					return <CardLocation key={newLoc.id} location={newLoc} />
				})}
				<button className="btn btn-info" onClick={()=>{
					actions.getLocation()
				}}>Load More</button>
			</div>

				{/* Episodes */}
				<Link to="/episodes">
					<h2>Episode</h2>
				</Link>
			<div className="d-flex overflow-auto mb-5">
				{store.episode.map((newEpi) => {
					return <CardEpisode key={newEpi.id} episode={newEpi} />
				})}
			</div>

		</div>
	)
};
