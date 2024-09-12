import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";
import { useState } from "react";

const Body = () => {

  const [listOfRestaurants , setListOfRestaurants] = useState(restaurantList);

    return (
      <div className="body">
        <div className="filter">
          <button className="filter-btn" 
            onClick={()=>{
              let filteredResList= listOfRestaurants.filter((res)=> res.info.avgRating > 4.5);
              console.log(filteredResList);
              setListOfRestaurants(filteredResList);
            }}>Top rated Restarants</button>
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