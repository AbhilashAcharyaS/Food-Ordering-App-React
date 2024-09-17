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
            <h4>{avgRating} <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
  <path fillRule="evenodd" d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393 3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293 1.41-3.393A.75.75 0 0 1 8 1.75Z" clipRule="evenodd" />
</svg>

({totalRatingsString})  : {costForTwoMessage}</h4>
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