import { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const { loggedInUser } = useContext(UserContext);

  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
      <div>
        <img className="w-44" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="p-4">Online Status: {onlineStatus ? "✅" : "🔴"} </li>
          <li className="p-4">
            <Link to="/">Home</Link>
          </li>
          <li className="p-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="p-4">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="p-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="p-4">Cart</li>
          <button
            className="p-4"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li className="p-4">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
