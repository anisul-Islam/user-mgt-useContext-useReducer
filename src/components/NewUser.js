import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import { useUserContext } from "../hooks/useUsersContext";

const NewUser = () => {
  const { addUser, updateUser, editableUser } = useUserContext();
  const [username, setUsername] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (editableUser) {
      const updatedUser = { id: editableUser.id, username };
      updateUser(updatedUser);
    } else {
      const newUser = { id: uuidv4(), username };
      addUser(newUser);
      setUsername("");
    }
  };

  useEffect(() => {
    editableUser && setUsername(editableUser.username);
  }, [editableUser]);

  return (
    <div className="new-user">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={username}
          placeholder="Enter username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          required
        />
        <button type="submit">{editableUser ? "Edit User" : "Add User"}</button>
      </form>
    </div>
  );
};

export default NewUser;
