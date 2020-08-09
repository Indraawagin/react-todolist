import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
  const className = [
    "header-btn",
    props.color === "black" && "main-black-color",
    props.color === "red" && "main-red-color",
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
