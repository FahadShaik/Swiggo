import { useState } from "react";
import resList from "../utils/MockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState(resList);
  console.log(filteredRestaurants);

  function handleFilter() {
    const newFilteredList = resList.filter(
      (restaurant) => restaurant.info.avgRating > 4
    );
    setFilteredRestaurants(newFilteredList);
  }

  return (
    <div className="body">
      <div>
        <button className="filter-btn" onClick={handleFilter}>
          Top rated restaurants
        </button>
      </div>
      <div className="res-container">
        {/* <RestaurantCard resData={resList[0]} />
          <RestaurantCard resData={resList[1]} />
          <RestaurantCard resData={resList[2]} />
          <RestaurantCard resData={resList[3]} /> */}
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard resData={restaurant} key={restaurant.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
