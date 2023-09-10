import React, { useState } from "react";
import AddUser from "./components/Users/AddUser/AddUser";
import UserList from "./components/Users/UserList/UserList";
function App() {
  return (
    <div>
      <AddUser />
      <UserList />
    </div>
  );
}

export default App;
