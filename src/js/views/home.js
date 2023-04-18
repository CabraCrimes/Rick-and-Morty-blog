import React, {useContext} from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import {Card} from "../component/card"
import {CardLocation} from "../component/card"
import { CardEpisode } from "../component/card";

export const Home = () => {
	const {store, actions} = useContext(Context);

	return(
		<div className="container d-flex mx-auto row text-center mt-5">
			
			<h1>Home Page</h1>

			<div className="row "> 
			<Link to="/characters">
                <button className="btn btn-primary">Characters</button>
            </Link>
			{store.character.map((newChar)=>{
				return <Card key={newChar.id} character={newChar}/>
			}) }
			</div>

			<div className="row mt-5 ">
			<Link to="/location">
                <button className="btn btn-primary">Locations</button>
            </Link>

			{store.location.map((newLoc)=>{
				return <CardLocation key={newLoc.id} location={newLoc}/>
			})}
			</div>

			<div className="row">
			<Link to="/episodes">
				<button className="btn btn-primary">Episode</button>
            </Link>
			{store.episode.map((newEpi) =>{
					return <CardEpisode key={newEpi.id} episode={newEpi}/>
				})}
			</div>

		</div>
	)
	};
