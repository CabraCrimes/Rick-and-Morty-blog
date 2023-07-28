import React, { useContext } from "react";
import  {Context} from "../store/appContext"; 

export const Favourite = ({name}) =>{
const {store, actions} = useContext(Context);
    
    return (
        <div >
           <button className="btn btn-primary">
                <i className="fa-regular fa-heart" onClick={()=>{
                    actions.setFavorites(name.name)
                }}></i>
            </button>
        </div>
    )
}