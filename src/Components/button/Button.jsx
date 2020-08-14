import React from "react";
import PropTypes from "prop-types";
import styles from "./button.module.css";

const Button = (props) => {
  const className = [
    styles.headerBtn,
    props.color === "black" && styles.mainBlackColor,
    props.color === "red" && styles.mainRedColor,
  ].join(" ");

  return (
    <button className={className} onClick={props.onClick}>
      {props.text}
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
