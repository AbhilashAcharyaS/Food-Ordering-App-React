import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data})=>{
    
    const [showItem, setShowItem]= useState(false);

    const handleClick = ()=>{
        setShowItem(!showItem);
        
    }
    return (
        <div className="">
            
            <div className="accordion-header flex justify-between items-center my-4 shadow-md      bg-white  py-4 px-2 cursor-pointer" onClick={handleClick}>
              <h1 className="font-bold text-lg">{data.title} ({data.itemCards.length})</h1>
               <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"       stroke-width="1.5" stroke="currentColor" className="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
                
                </span>
            </div>
            <div className="accordion-body">
             {showItem && <ItemList items={data.itemCards}/> }   
            </div>
            
        </div>
    )
}

export default RestaurantCategory;