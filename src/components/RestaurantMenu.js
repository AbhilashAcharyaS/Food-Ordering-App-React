import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu =()=>{

    const [resInfo, setResInfo] = useState(null);
    useEffect(()=>{
        fetchData()
    },[]);

    const fetchData= async ()=>{
        const data= await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.96340&lng=77.58550&restaurantId=3883&catalog_qa=undefined&submitAction=ENTER");
        const json= await data.json();
        console.log(json);
        setResInfo(json.data);
    }

    const {name, cuisines, costForTwoMessage,avgRating, totalRatingsString} = resInfo?.cards[2]?.card?.card?.info;

    return (resInfo===null)? (<Shimmer/>) : (
        <div className="res-menu">
            <h2>{name}</h2>
            <h2>Menu</h2>
            <ul >
                <li></li>
            </ul>

        </div>
    )
}

export default RestaurantMenu;