import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const Header = (props) => {
  return (
    <section className="header">
      <Button
        onClick={props.showAddToogle}
        text={props.showAdd ? "FINISHED" : "ADD"}
      />
      <h1 className="header-title">Todo List</h1>
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
