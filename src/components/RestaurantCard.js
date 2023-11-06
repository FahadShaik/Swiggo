import { RES_IMG } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { name, cuisines, avgRating, cloudinaryImageId } = resData?.info;
  return (
    <div className="res-card">
      <img
        className="res-image"
        src={RES_IMG + cloudinaryImageId}
        alt="res-image"
      />
      <h2>{name}</h2>
      <h2>{cuisines.join(", ")}</h2>
      <div>Rating: {avgRating}</div>
      <div>Rs. {resData.info.feeDetails.totalFee / 10}</div>
    </div>
  );
};

export default RestaurantCard;
