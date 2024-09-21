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
  
  const cuisinesMax4= cuisines.slice(0,4)
  return (
    <div className="res-card w-48 h-[380px] m-2 p-2 bg-gray-50 rounded-xl hover:bg-gray-200 hover:shadow-xl hover:scale-[1.02]">
      <img
        src={CDN_URL + cloudinaryImageId}
        alt="Restarant Image"
        className="res-img w-full h-[150px] mx-auto rounded-xl"
      />
      <h3 className="font-bold text-center py-1">{name}</h3>
      <h4 className="text-center">{areaName}</h4>
      <p className="font-semibold text-center">{cuisinesMax4.join(", ")}</p>
      <p className="text-center">
        {avgRating}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="size-4 inline mt-[-4px]"
        >
          <path
            fillRule="evenodd"
            d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393 3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293 1.41-3.393A.75.75 0 0 1 8 1.75Z"
            clipRule="evenodd"
          />
        </svg>{" "}
        ({totalRatingsString})
      </p>
      <p className="text-center">{slaString}</p>
    </div>
  );
};

export default RestaurantCard;
