import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

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


  const onlineStatus = useOnlineStatus();

  if(onlineStatus === false){
    return <h1 className="h-60 text-center mt-20 text-xl text-red-400">You are offline! Please check your internet connection.</h1>
  }
  
  if(listOfRestaurants.length===0){
    return <div><Shimmer/></div> 
  }

    return (
      <div className="body">
        
          <div className="search  flex justify-center my-8 items-center">
            <input type="text" className="search-input border border-gray-400 border-r-0 py-2 rounded-l-full text-center" value={searchText} placeholder="Search Restaurants"
              onChange={(e)=>{
                setSearchText(e.target.value);
              }} />
  
            <button onClick={()=>{
              console.log(searchText);
              let searchResultRest= listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
              console.log(searchResultRest);
              
              setCopyListofRestaurants(searchResultRest);
            }} className="bg-blue-100 py-[9px] px-4 rounded-r-full hover:font-semibold hover:bg-blue-200">Search</button>
          </div>

          <div className="filter flex justify-center">

          <button className="filter-btn bg-slate-100 border border-black mx-4 px-2 mb-4" 
            onClick={()=>{
              let filteredResList= listOfRestaurants.filter((res)=> res.info.avgRating > 4.5);
              console.log(filteredResList);
              setCopyListofRestaurants(filteredResList);
            }} >Top rated Restarants</button>


          <button className="filter-btn bg-slate-100 border border-black mx-4 px-2 mb-4" 
            onClick={()=>{
              let sortedResList= copyListofRestaurants.toSorted((a, b) => a.info.sla.deliveryTime < b.info.sla.deliveryTime ? -1 : 1);
              console.log(sortedResList);
              setCopyListofRestaurants(sortedResList);
            }}>Sort based on delivery time</button>

            </div>
            
        
        <div className="res-container w-10/12 mx-auto flex flex-wrap">
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