import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import Dropdown from 'react-bootstrap/Dropdown';


export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-primary bg-info pb-3 px-3">
			<Link to="/">
				<span className="navbar-brand btn mb-0 h1 fs-3">Rick and Morty</span>
			</Link>

			<div className="d-flex mx-auto">

				<Link to="/characters">
					<div className="btn fs-4">Characters</div>
				</Link>
				<div className="">
					<Link to="/episodes" >
						<div className="btn fs-4">Episodes</div>
					</Link>
				</div>
				<div className="">
					<Link to="/location" >
						<div className="btn fs-4">Location</div>
					</Link>
				</div>
			</div>

			<div className="d-flex justify-content-end ">

				<div className="btn-group ">
					<Dropdown className="d-inline mx-2 " autoClose="outside">
						<Dropdown.Toggle className="bg-info border border-0 text-black fs-6" id="dropdown-autoclose-outside">
							Favourites {store.favourite.length}
						</Dropdown.Toggle>
						<Dropdown.Menu>
							{store.favourite != 0 ?
								<>{store.favourite.map((fav) => {
									return <li key={fav} className="d-flex"><p className="dropdown-item my-2">{fav}</p><button onClick={(() => {
										actions.setFavorites(fav);
									})}
										className="btn btn-danger btn-sm my-2 me-2">x</button></li>
								})}</> : <li><p className="dropdown-item" type="button d-flex align-items-center">Add a favourite</p></li>}
						</Dropdown.Menu>
					</Dropdown>
				</div>
			</div>
		</nav>
	);
};
