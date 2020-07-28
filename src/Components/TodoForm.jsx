import React, { useState } from "react";
import PropTypes from "prop-types";

const Todoform = (props) => {
  const [inputState, setInputState] = useState("");

  const handleFormSumbit = (event) => {
    event.preventDefault();

    if (!inputState) {
      alert("No Blank Todo");
      return;
    }

    props.addTodo(inputState);
    setInputState("");
  };

  return (
    <section className="add">
      <form action="" className="add-form" onSubmit={handleFormSumbit}>
        <input
          type="text"
          className="add-input"
          value={inputState}
          onChange={(event) => setInputState(event.target.value)}
        />
        <button className="add-btn main-black-color">Add</button>
      </form>
    </section>
  );
};

Todoform.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default Todoform;
