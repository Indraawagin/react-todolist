import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";

const Todoform = (props) => {
  // todo : Hook Input
  const [inputState, setInputState] = useState("");

  // todo: ref={inputFocus}
  const inputFocus = useRef(null);
  useEffect(() => {
    inputFocus.current.focus();
  });

  const handleFormSumbit = (event) => {
    event.preventDefault();
    if (!inputState) {
      alert("No Blank Todo!");
      return;
    }
    props.addTodo(inputState);
    setInputState("");
  };

  if (inputState.length > 40) {
    setInputState("");
    alert("Please create a shorter todo text!");
    return;
  }

  return (
    <section className="add">
      <form action="" className="add-form" onSubmit={handleFormSumbit}>
        <input
          ref={inputFocus}
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
