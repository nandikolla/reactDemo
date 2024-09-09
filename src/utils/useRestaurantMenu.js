import { useState, useEffect } from "react";

import { REST_MENU_URL } from "../utils/constants";

const useRestaurantMenu = (restId) => {
  const [restData, setRestData] = useState(null);
  const [menuData, setMenuData] = useState(null);

  useEffect(() => {
    fetchRestInfo();
  }, []);

  const fetchRestInfo = async () => {
    const data = await fetch(REST_MENU_URL + restId.id);

    const jsonData = await data.json();

    setMenuData(
      jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    );
    setRestData(jsonData?.data?.cards[2]?.card?.card?.info);
  };

  return [restData, menuData];
};

export default useRestaurantMenu;
