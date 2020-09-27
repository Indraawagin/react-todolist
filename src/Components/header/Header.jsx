import React from "react";
import PropTypes from "prop-types";
import Button from "../button/Button";
// import styles from "./Header.module.css";
import * as styles from "./header.styles";
import { useTheme } from "emotion-theming";

const Header = (props) => {
  const theme = useTheme();
  return (
    <section css={styles.header}>
      <Button
        onClick={props.showAddToogle}
        text={props.showAdd ? "FINISHED" : "ADD"}
      />
      <h1 css={styles.headerTitle({ theme })}>Todo List</h1>
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
