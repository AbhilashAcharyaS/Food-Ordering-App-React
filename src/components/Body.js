import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {

  const [listOfRestaurants , setListOfRestaurants] = useState([]);
  const [copyListofRestaurants,setCopyListofRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  
  useEffect(()=>{
    fetchData()
  },[]);

  const fetchData = async ()=>{
    const data= await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8822193&lng=77.5659682&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');

    const jsonData= await data.json();
    console.log(jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);

    setListOfRestaurants(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setCopyListofRestaurants(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }
  
  if(listOfRestaurants.length===0){
    return <div><Shimmer/></div> 
  }

    return (
      <div className="body">
        <div className="filter">

          <div className="search">
            <input type="text" className="search-input" value={searchText} 
              onChange={(e)=>{
                setSearchText(e.target.value);
              }} />
  
            <button onClick={()=>{
              console.log(searchText);
              let searchResultRest= listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
              console.log(searchResultRest);
              
              setCopyListofRestaurants(searchResultRest);
            }}>Search</button>
          </div>

          <button className="filter-btn" 
            onClick={()=>{
              let filteredResList= listOfRestaurants.filter((res)=> res.info.avgRating > 4.5);
              console.log(filteredResList);
              setCopyListofRestaurants(filteredResList);
            }}>Top rated Restarants</button>


          <button className="filter-btn" 
            onClick={()=>{
              let sortedResList= copyListofRestaurants.toSorted((a, b) => a.info.sla.deliveryTime < b.info.sla.deliveryTime ? -1 : 1);
              console.log(sortedResList);
              setCopyListofRestaurants(sortedResList);
            }}>Sort based on delivery time</button>

            
            
        </div>
        <div className="res-container">
          {copyListofRestaurants.map((res) => (
            <Link to={"/restaurants/"+ res.info.id} key={res.info.id}>
            <RestaurantCard resData={res} />
            </Link>
          ))}
        </div>
      </div>
    );
  };

  export default Body;