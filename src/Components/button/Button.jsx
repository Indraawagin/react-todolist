import React from "react";
import PropTypes from "prop-types";
import * as styles from "./button.styles";
// import styles from "./button.module.css";

const Button = ({ color, onClick, text }) => {
  // const className = [
  //   styles.headerBtn,
  //   props.color === "black" && styles.mainBlackColor,
  //   props.color === "red" && styles.mainRedColor,
  // ].join(" ");

  return (
    <button css={styles.button({ color })} onClick={onClick}>
      {text}
    </button>
  );
};

Button.defaultProps = {
  text: "Button",
  color: "black",
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.oneOf(["black", "red"]),
};

export default Button;
