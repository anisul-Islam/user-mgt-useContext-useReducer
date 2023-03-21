import { useContext } from "react";

import { UsersContext } from "../context/UsersContext";

export const useUserContext = () => {
  return useContext(UsersContext);
};
