import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const Single = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	// const item = store.character.map(newArray => {
	// 	return Object.entries(newArray)
	//  });

	const item = store.character.find((e) => e.id == params.theid)
	console.log(item)
	//  item.filter( (e) => e.id != params.theid)

	

	return (
		<div className="jumbotron">

			{store.character.length > 0 ? <>
				<h1>Name: {item.name}</h1>
				<p>ID: {item.id}</p>
				<p>Staus: {item.status}	</p>
				<p>Species: {item.species}</p>
				<p>Type: {item.type}</p>
				<p>Gender: {item.gender}</p>

				{/* <p>Images: {item.image}	</p> */}

				{/* <p>Episode List: {item.episode}	</p> */}

				{/* <p>Url: {item.url}</p>		 */}

				<p>Created: {item.created}</p></> : null}

			{/* Original Location: {item.origin}	object	Name and link to the character's origin location.
				Last known location: {item.location}	object	Name and link to the character's last known location endpoint. */}

			{/* string (url)	Link to the character's image. All images are 300x300px and most are medium shots or portraits since they are intended to be used as avatars. */}
			{/* array (urls)	List of episodes in which this character appeared. */}

		</div>
	);
};


