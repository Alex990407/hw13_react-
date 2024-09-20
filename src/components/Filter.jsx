import React from "react";
import { connect } from "react-redux";
import { setFilter } from "../redux/actions";
import styles from "../styles/Filter.module.css";

const Filter = ({ setFilter }) => {
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <input
      className={styles.input}
      type="text"
      placeholder="Filter users"
      onChange={handleFilterChange}
    />
  );
};

export default connect(null, { setFilter })(Filter);
