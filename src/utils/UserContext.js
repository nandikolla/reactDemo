import { createContext } from "react";

const UserContext = createContext({
  userName: "Default name",
});

export default UserContext;
