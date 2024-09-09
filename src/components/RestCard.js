import { useContext } from "react";

import { IMAGE_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestCard = (props) => {
  const { restData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    restData;

  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        className="rounded-lg"
        alt="Restaurant Image"
        src={IMAGE_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.deliveryTime} mins</h4>
      <h4>{loggedInUser}</h4>
    </div>
  );
};

/**This is a higher order component and adds promoted label to the restCard component */
export const withPromotedLabel = (RestCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestCard {...props} />
      </div>
    );
  };
};

export default RestCard;
