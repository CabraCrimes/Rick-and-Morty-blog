import React, {useContext} from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { CharacterCard } from "../component/cards/character-card";

export const Characters = () => {
	const {store, actions} = useContext(Context);
	return(
		<div className="container mx-auto text-center mt-5">
			<h1>Characters</h1>

            <Link to="/" className="d-flex justify-content-start">
                <h2 className="">Home</h2>
            </Link>
            <div className="row row-cols-md-4 g-2">
				{store.character.length != 0 ? store.character.map((char)=> {
					return <CharacterCard key={char.id} character={char}/>
				}) : "No characters founds"}
			</div>
        </div>
        )
    }

	// TODO make cards recative and make sure all elements are in line. Sort out styles and buttons. Make sure you understand 
	// the flux!!!!!! Fix the learn more page.