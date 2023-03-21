import React, { useState, useReducer } from "react";
import { UsersContext } from "../context/UsersContext";
import { initialState, reducer } from "../reducer/userReducer";

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [editableUser, setEditableUser] = useState(null);

  const value = {
    users: state.users,
    addUser: (newUser) => {
      dispatch({ type: "ADD_USER", payload: newUser });
    },
    deleteUser: (id) => {
      dispatch({ type: "DELETE_USER", payload: id });
    },
    updateUser: (updatedUser) => {
      dispatch({ type: "UPDATE_USER", payload: updatedUser });
    },
    editableUser,
    setEditableUser,
  };

  return (
    <UsersContext.Provider value={value}>{children}</UsersContext.Provider>
  );
};

export default Store;
