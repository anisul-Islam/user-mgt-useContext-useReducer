import React from "react";

import { useUserContext } from "../hooks/useUsersContext";

const User = ({ user }) => {
  const { id, username } = user;
  const { deleteUser, setEditableUser } = useUserContext();

  const handleDelete = (id) => {
    deleteUser(id);
  };

  const handleEdit = (user) => {
    setEditableUser(user);
  };

  return (
    <article className="user">
      <h2>{id}</h2>
      <p>{username}</p>
      <button
        onClick={() => {
          handleEdit(user);
        }}
      >
        Edit
      </button>
      <button
        onClick={() => {
          handleDelete(id);
        }}
      >
        Delete
      </button>
    </article>
  );
};

export default User;
