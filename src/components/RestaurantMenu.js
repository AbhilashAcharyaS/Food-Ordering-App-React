import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";

const RestaurantMenu =()=>{

    const [resInfo, setResInfo] = useState(null);

    useEffect(()=>{
        fetchData()
    },[]);

    const {resId} = useParams();
  
    const fetchData= async ()=>{
        const data= await fetch(MENU_API+resId);
        const json= await data.json();
        console.log(json.data);
        setResInfo(json.data);
    }

    if(resInfo === null) return <Shimmer/>;

    const {name, cuisines, costForTwoMessage, avgRating, totalRatingsString, areaName,sla, feeDetails} = resInfo?.cards[2]?.card?.card?.info;

    const {itemCards}= resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(itemCards);
    
    return (
        <div className="res-menu-container">
            <div className="res-details">
            <h2>{name}</h2>
            <h4>{avgRating}({totalRatingsString})  : {costForTwoMessage}</h4>
            <h4>{cuisines.join(', ')} </h4>
            <h4>Outlet - {areaName}</h4>
            <p>{sla.slaString.toLowerCase()}</p>

            <p>{feeDetails.message}</p>
            </div>

            <div className="res-menu">
                <h2>Menu</h2>

                
                    {itemCards.map((item)=>(
                         <p key={item.card.info.id}>{item.card.info.name} --- ₹{item.card.info.price/100 || item.card.info.defaultPrice/100}</p>
                    ))}
                    
                
            </div>
            
        </div>
    )
}

export default RestaurantMenu;