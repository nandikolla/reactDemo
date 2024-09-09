import { IMAGE_URL } from "../utils/constants";

const Item = ({ itemList }) => {
  return (
    <div>
      {itemList.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className=" w-9/12 py-2">
            <div>
              <span className=" font-bold text-gray-600">
                {item.card.info.name}
              </span>
            </div>
            <div>
              <span className=" text-sm font-semibold">
                ₹
                {item.card.info.defaultPrice
                  ? item.card.info.defaultPrice / 100
                  : item.card.info.price / 100}
              </span>
            </div>

            {item.card.info.ratings.aggregatedRating.rating && (
              <span className="text-sm">
                ⭐{item.card.info.ratings.aggregatedRating.rating} (
                {item.card.info.ratings.aggregatedRating.ratingCountV2})
              </span>
            )}
            {item.card.info.description && (
              <p className="text-xs font-serif text-gray-600 py-2">
                {item.card.info.description}
              </p>
            )}
          </div>
          <div className="w-3/12 p-4">
            <button className=" absolute p-2 mx-16 rounded-lg bg-black text-white shadow-lg">
              ADD +
            </button>
            <img src={IMAGE_URL + item.card.info.imageId}></img>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Item;
