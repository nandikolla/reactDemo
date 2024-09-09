import { useParams } from "react-router-dom";
import { useState } from "react";

import ShimmerBody from "./ShimmerBody";
import Menu from "./Menu";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const Restaurant = () => {
  const restId = useParams();
  const [showItems, setShowItems] = useState(null);

  const restaurantMenu = useRestaurantMenu(restId);
  const [restData, menuData] = restaurantMenu;

  const categories = menuData
    ? menuData.filter(
        (c) =>
          c.card?.["card"]?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      )
    : [];

  if (restData == null) return <ShimmerBody />;

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{restData.name}</h1>
      <div className="rest-info">
        <p className="font-bold text-lg">
          {restData.avgRating} Stars - {restData.costForTwoMessage}
        </p>
        <p>{restData.cuisines.join(", ")}</p>
        <p>Delivery Time - {restData.sla?.deliveryTime} mins </p>
      </div>
      <div className="rest-menu">
        {categories.map((menu, index) => (
          <Menu
            key={menu.card.card.title}
            data={menu.card.card}
            showItems={index === showItems}
            handleClick={() => setShowItems(index)}
            collapse={() => setShowItems(null)}
          />
        ))}
      </div>
    </div>
  );
};

export default Restaurant;
