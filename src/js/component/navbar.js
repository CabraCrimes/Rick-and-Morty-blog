import React, { useState } from "react";
import { Link } from "react-router-dom";



export const Navbar = () => {


	return (
		<nav className="navbar navbar-light bg-light mb-3 px-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Rick and Morty</span>
			</Link>

			<div className="d-flex mx-auto">
				
				<Link to="/characters">
					<button className="btn btn-primary">Characters</button>
				</Link>
				<div className="">
					<Link to="/episodes" >
						<button className="btn btn-primary">Episodes</button>
					</Link>
				</div>
				<div className="">
					<Link to="/location" >
						<button className="btn btn-primary">Location</button>
					</Link>
				</div>
			</div>
				<div className="d-flex justify-content-end">
					
					<div className="btn-group">
					<button type="button" className="btn btn-warning dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
						Favourites
					</button>
					<ul className="dropdown-menu dropdown-menu-end">
						<li><button className="dropdown-item" type="button">Action</button></li>
						</ul>
					</div>
				</div>
		</nav>
	);
};
