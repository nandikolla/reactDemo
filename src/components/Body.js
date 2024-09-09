import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import RestCard, { withPromotedLabel } from "./RestCard";
import ShimmerBody from "./ShimmerBody";
import { RESTAURANTS_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const withPromotedLabel = withPromotedLabel;

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");

  const onlineStatus = useOnlineStatus();

  const RestaurantCardPromoted = withPromotedLabel(RestCard);

  const { loggedInUser, setUserName } = useContext(UserContext);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  //fetch data from the zomato API
  const fetchRestaurants = async () => {
    let data = await fetch(RESTAURANTS_URL);

    data = await data.json();
    setListOfRestaurants(
      data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (onlineStatus == false) {
    return <h1>Your are offline!! Please check your network connections.</h1>;
  }

  // the rest list is empty then display a shimmer UI
  return listOfRestaurants.length === 0 ? (
    <ShimmerBody />
  ) : (
    <div>
      <div className="flex">
        <div className="searchInput m-4 p-4">
          <input
            className="border border-solid border-black"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="px-4 py-2 bg-green-200 m-4"
            onClick={() => {
              let filteredRest = listOfRestaurants.filter((rest) => {
                return rest.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });

              setFilteredRestaurants(filteredRest);
            }}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
            onClick={() => {
              const topRest = listOfRestaurants.filter((rest) => {
                return rest?.info?.avgRating > 3.9;
              });

              setFilteredRestaurants(topRest);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <label className="p-2">User Name </label>
          <input
            className="border border-black p-2"
            type="text"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          ></input>
        </div>
      </div>
      <div className="bg-red-500 font-bold flex justify-between items-center">
        <button
          className="p-4 mx-auto"
          onClick={() => {
            const chineseRest = listOfRestaurants.filter((rest) => {
              let cuisine = rest?.info?.cuisines;
              return cuisine.find((element) => element == "Chinese");
            });
            setFilteredRestaurants(chineseRest);
          }}
        >
          Chinese
        </button>
        <label
          onClick={() => {
            const chineseRest = listOfRestaurants.filter((rest) => {
              let cuisine = rest?.info?.cuisines;
              return cuisine.find((element) => element.includes("Indian"));
            });
            setFilteredRestaurants(chineseRest);
          }}
        >
          Indian
        </label>
        <label
          className="p-4 mx-auto"
          onClick={() => {
            const chineseRest = listOfRestaurants.filter((rest) => {
              let cuisine = rest?.info?.cuisines;
              return cuisine.find((element) => element.includes("American"));
            });
            setFilteredRestaurants(chineseRest);
          }}
        >
          American
        </label>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants.map((rest) => (
          <Link to={"/restaurant/" + rest.info.id} key={rest.info.id}>
            {rest.info.aggregatedDiscountInfoV3 ? (
              <RestaurantCardPromoted restData={rest.info} />
            ) : (
              <RestCard restData={rest.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
