import React from "react";

import Users from "./components/Users";
import "./App.css";
import NewUser from "./components/NewUser";
import Store from "./store/Store";

const App = () => {
  return (
    <div>
      <Store>
        <NewUser />
        <Users />
      </Store>
    </div>
  );
};

export default App;
