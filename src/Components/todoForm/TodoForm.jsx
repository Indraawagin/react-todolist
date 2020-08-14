import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./TodoForm.module.css";

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
    <section className={styles.add}>
      <form action="" className={styles.addForm} onSubmit={handleFormSumbit}>
        <input
          ref={inputFocus}
          type="text"
          className={styles.addInput}
          value={inputState}
          onChange={(event) => setInputState(event.target.value)}
        />
        <button className={styles.addBtn}>Add</button>
      </form>
    </section>
  );
};

Todoform.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default Todoform;
