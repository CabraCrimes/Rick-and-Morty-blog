import React, { useState } from "react";
import { Link } from "react-router-dom";



export const Navbar = () => {


	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Rick and Morty</span>
			</Link>

			<div className="d-flex mx-auto">
				<div className="mx-auto">
					<Link to="/characters">
						<button className="btn btn-primary">Characters</button>
					</Link>
					<div className="mx-auto">
						<Link to="/episodes" >
							<button className="btn btn-primary">Episodes</button>
						</Link>
					</div>
					<div className="mx-auto">
						<Link to="/location" >
							<button className="btn btn-primary">Location</button>
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};
