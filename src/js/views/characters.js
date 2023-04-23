import React, {useContext} from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import {Card} from "../component/card"

export const Characters = () => {
	const {store, actions} = useContext(Context);
	return(
		<div className="container row mx-auto text-center mt-5">
			<h1>Characters</h1>

            <Link to="/" className="d-flex justify-content-start">
                <h2 className="">Home</h2>
            </Link>
            <div className="row row-cols-5">
				{store.character.map((char)=> {
					return <Card key={char.id} character={char}/>
				})}
			</div>
        </div>
        )
    }