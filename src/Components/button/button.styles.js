import { css } from "@emotion/core";

export const button = (props) => {
  let textColor;

  switch (props.color) {
    case "black":
      textColor = "#26292d";
      break;
    case "red":
      textColor = "#f11c1f";
      break;
    default:
      textColor = "#26292d";
      break;
  }

  return css`
    color: ${textColor};
    font-size: 2rem;
    background: unset;
    border: unset;
    outline: unset;
    padding: 16px;
    font-family: "Bungee", cursive;
    cursor: pointer;
  `;
};
