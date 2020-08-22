import React from "react";
import PropTypes from "prop-types";
import Button from "../button/Button";
import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <section className={styles.header}>
      <Button
        onClick={props.showAddToogle}
        text={props.showAdd ? "FINISHED" : "ADD"}
      />
      <h1 className={styles.headerTitle}>Todo List</h1>
      <Button onClick={props.clearTodo} text="Clear" color="red" />
    </section>
  );
};

Header.propTypes = {
  showAddToogle: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired,
  clearTodo: PropTypes.func.isRequired,
};
export default Header;
