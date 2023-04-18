import React, { useState } from "react";
import { Card } from "./card";
import { Characters } from "../views/characters";
import  getState from "../store/flux"; 

export const Favourite = () =>{
    const [isFav, setFav] = useState (false)
    const [isFavArray, setFavArray] = useState ([])
    
    console.log("Console log => " + isFavArray)

    const addToFavourites = (item) => {
        setFavArray([...isFavArray, item])
    }

    return (
        <div >
           
             <button className={`btn btn-primary ${isFav == true ? addToFavourites() : null}`}
              onClick={()=> {setFav(true)}}>
                <i className="fa-regular fa-heart"></i>
                </button>
            
        </div>
    )
}