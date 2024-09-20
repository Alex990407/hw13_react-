import React from "react";
import Filter from "./components/Filter";
import UserList from "./components/UserList";
import styles from "./styles/App.module.css";

import "./App.css";

function App() {
  return (
    <div className={styles.container}>
      <h1>User Filter</h1>
      <Filter />
      <UserList />
    </div>
  );
}

export default App;
