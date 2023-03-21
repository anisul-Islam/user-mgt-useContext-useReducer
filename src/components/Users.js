import React from "react";
import { useUserContext } from "../hooks/useUsersContext";
import User from "./User";

const Users = () => {
  const { users } = useUserContext();

  return (
    <section className="users">
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </section>
  );
};

export default Users;
