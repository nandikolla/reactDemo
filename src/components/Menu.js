import { useState } from "react";
import { IMAGE_URL } from "../utils/constants";
import Item from "./Item";

const Menu = ({ data, showItems, handleClick, collapse }) => {
  return (
    <div className="bg-gray-100 shadow-lg w-6/12 mx-auto my-4 px-2">
      <div
        className="flex justify-between cursor-pointer font-bold p-2 border-b-4"
        onClick={showItems ? collapse : handleClick}
      >
        <span>
          {data.title} ({data.itemCards.length})
        </span>
        <span>{showItems ? "-" : "+"}</span>
      </div>
      {showItems && <Item itemList={data.itemCards} />}
    </div>
  );
};

export default Menu;
