import { css } from "@emotion/core";

export const header = () => {
  return css`
    display: flex;
    align-items: flex-start;
  `;
};

export const headerTitle = () => {
  return css`
    flex: 1;
    text-align: center;
    font-size: 3.6rem;
    font-family: "Gloria Hallelujah", cursive;
    text-transform: lowercase;
  `;
};
