import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurantList from "../utils/useRestaurantList";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [searchText, setSearchText] = useState("");

  const filterSearchList = useRestaurantList();

  function handleChange(e) {
    setSearchText(e.target.value);
  }

  function handleSearch() {
    const searchedRestaurant = restaurantList.filter((restaurant) => {
      return restaurant.info.name
        .toLowerCase()
        .includes(searchText.toLocaleLowerCase());
    });
    setFilterSearchList(searchedRestaurant);
  }

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === !true) {
    return <h1>Oops you're offline please check internet</h1>;
  }

  return filterSearchList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div>
        <input value={searchText} onChange={handleChange} />
        <button onClick={handleSearch}>Search</button>
        <button
          className="filter-btn"
          onClick={() => {
            const newFilteredList = filterSearchList.filter((restaurant) => {
              return restaurant.info.avgRating > 4;
            });
            setFilterSearchList(newFilteredList);
          }}
        >
          Top rated restaurants
        </button>
      </div>
      <div className="res-container">
        {/* <RestaurantCard resData={resList[0]} />
          <RestaurantCard resData={resList[1]} />
          <RestaurantCard resData={resList[2]} />
          <RestaurantCard resData={resList[3]} /> */}
        {filterSearchList.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {" "}
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
