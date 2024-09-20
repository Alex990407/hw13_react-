import React from "react";
import styles from "../styles/UserItem.module.css";

const UserItem = ({ user }) => {
  return <li className={styles.user}>{user.name}</li>;
};

export default UserItem;
