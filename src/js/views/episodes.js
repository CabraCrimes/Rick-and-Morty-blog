import React, {useContext} from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import {CardEpisode} from "../component/card";

export const Episodes = () => {
    const {store, actions} = useContext(Context);

    return(
        <div className="container row mx-auto text-center mt-5">
			<h1>Episodes</h1>

            <Link to="/">
                <button className="btn btn-primary">Home</button>
            </Link>
            
			{store.episode.map((ep)=> {
                return <CardEpisode key={ep.id} episode={ep}/>
			})}

        </div>
    )
}