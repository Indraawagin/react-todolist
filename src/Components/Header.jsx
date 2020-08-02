import React from "react";
import PropTypes from "prop-types";

const Header = (props) => {
  return (
    <section className="header">
      <button
        className="header-btn main-black-color"
        onClick={props.showAddToogle}
      >
        {props.showAdd ? "FINISHED" : "ADD"}
      </button>
      <h1 className="header-title">Todo List</h1>
      <button className="header-btn main-red-color">Clear</button>
    </section>
  );
};

Header.propTypes = {
  showAddToogle: PropTypes.func.isRequired,
};
export default Header;
