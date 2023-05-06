import React, { useContext } from "react";
import { Card } from "./card";
import { Characters } from "../views/characters";
import  {Context} from "../store/appContext"; 

export const Favourite = ({Characters}) =>{
const {store, actions} = useContext(Context);
    
    return (
        <div >
           <button className="btn btn-primary">
                <i className="fa-regular fa-heart" onClick={()=>{
                    actions.setFavorites(Characters.name)
                }}></i>
            </button>
        </div>
    )
}