import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";

const Body = () => {
    return (
      <div className="body">
        <div className="search">
          <input type="text" placeholder="Search for items"></input>
          <button>Search</button>
        </div>
        <div className="res-container">
          {restaurantList.map((res) => (
            <RestaurantCard key={res.info.id} resData={res} />
          ))}
        </div>
      </div>
    );
  };

  export default Body;