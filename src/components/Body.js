import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";

const Body = () => {

  const [listOfRestaurants , setListOfRestaurants] = useState([]);

  useEffect(()=>{
    fetchData()
  },[]);

  const fetchData = async ()=>{
    const data= await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');

    const jsonData= await data.json();
    console.log(jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);

    setListOfRestaurants(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }
  
  if(listOfRestaurants.length===0){
    return <h1 style={{textAlign:"center"}}>Loading...</h1>
  }

    return (
      <div className="body">
        <div className="filter">
          <button className="filter-btn" 
            onClick={()=>{
              let filteredResList= listOfRestaurants.filter((res)=> res.info.avgRating > 4.5);
              console.log(filteredResList);
              setListOfRestaurants(filteredResList);
            }}>Top rated Restarants</button>


          {/* <button className="filter-btn" 
            onClick={()=>{
              let sortedResList= listOfRestaurants.toSorted((a, b) => a.info.sla.deliveryTime < b.info.sla.deliveryTime ? -1 : 1);
              console.log(sortedResList);
              setListOfRestaurants(sortedResList);
            }}>Sort based on delivery time</button> */}

            
            
        </div>
        <div className="res-container">
          {listOfRestaurants.map((res) => (
            <RestaurantCard key={res.info.id} resData={res} />
          ))}
        </div>
      </div>
    );
  };

  export default Body;