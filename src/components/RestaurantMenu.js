import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import {CDN_URL, nonVegIcon, vegIcon}  from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";


const RestaurantMenu =()=>{

    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);

    if(resInfo === null) return <Shimmer/>;

    const {name, cuisines, costForTwoMessage, avgRating, totalRatingsString, areaName,sla, feeDetails} = resInfo?.cards[2]?.card?.card?.info;

    const {itemCards}= resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(itemCards);
    
    return (
        <div className="res-menu-container w-3/5 mx-auto">
            <h2 className="font-bold text-2xl my-4">{name}</h2>
            <div className="outer-border p-4 bg-gradient-to-t from-slate-200 to-white border border-t-0 rounded-3xl">
            <div className="res-details border bg-white shadow-md rounded-3xl p-4 ">
            <h4 className="font-semibold">{avgRating} <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4 inline mt-[-5px] ml-[-2px] mr-1">
            <path fillRule="evenodd" d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393 3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293 1.41-3.393A.75.75 0 0 1 8 1.75Z" clipRule="evenodd" />
            </svg>

            ({totalRatingsString})  : {costForTwoMessage}</h4>
            <h4 className="text-red-600 text-md">{cuisines.join(', ')} </h4>
            <h4 className="font-semibold text-sm">Outlet -<span className="font-normal"> {areaName}</span></h4>
            <p className="font-semibold text-sm">{sla.slaString.toLowerCase()}</p>

            <p>{feeDetails.message}</p>
            </div>
            </div>

            <div className="res-menu">
                <h2 className="text-xl font-semibold text-center my-8">MENU</h2>

                
                    {itemCards.map((item)=>(
                         <div key={item.card.info.id} className="flex justify-between items-center my-4 py-6 border-b border-slate-500">
                            <div>
                                {(()=>{
                                    if(item.card.info.itemAttribute.vegClassifier==="NONVEG"){
                                        return <p><img src={nonVegIcon} className="w-[20px]"/></p>
                                    }
                                    else return <p><img src={vegIcon} className="w-[20px]"/></p>
                                }) ()}
                                
                                <h3 className="font-semibold text-lg">{item.card.info.name}</h3>
                                <h4 className="font-semibold"> ₹{item.card.info.price/100 || item.card.info.defaultPrice/100}</h4>
                                <p className="mr-6 text-slate-500">{item.card.info.description}</p>
                            </div>
                            
                            <img src={CDN_URL+item.card.info.imageId} className="w-[156px] h-full rounded-2xl" />
                        </div>
                    ))}
                    
                
            </div>
            
        </div>
    )
}

export default RestaurantMenu;