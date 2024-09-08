import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
    const {
      cloudinaryImageId,
      name,
      areaName,
      cuisines,
      avgRating,
      totalRatingsString,
    } = resData?.info;
    const { slaString } = resData?.info.sla;
    return (
      <div className="res-card">
        <img
          src={
            CDN_URL +
            cloudinaryImageId
          }
          alt="Restarant Image"
          className="res-img"
        />
        <h3>{name}</h3>
        <h4>{areaName}</h4>
        <p>{cuisines.join(", ")}</p>
        <p>
          {" "}
          {avgRating} ({totalRatingsString})
        </p>
        <p>{slaString}</p>
      </div>
    );
  };

  export default RestaurantCard;