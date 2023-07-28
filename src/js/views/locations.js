import React, {useContext} from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { LocationCard } from "../component/cards/location-card"; 

export const Locations = () => {
	const {store, actions} = useContext(Context);
	return(
		<div className="container row mx-auto text-center mt-5">
			<h1>Locations</h1>

            <Link to="/">
                <button className="btn btn-primary">Home</button>
            </Link>
            
            {console.log(store.location)}
			{store.location.map((loc)=> {
                return <LocationCard key={loc.id} location={loc}/>
			})}

        </div>
        )
    }