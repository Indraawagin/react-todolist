import React from "react";
import PropTypes from "prop-types";
import styles from "./Todo.module.css";

const Todo = (props) => {
  return (
    <div
      className={styles.todo}
      onClick={() => props.completeTodo(props.index)}
    >
      <span
        style={{
          textDecoration: props.isComplete ? "line-through" : "initial",
        }}
        className={styles.todoText}
      >
        {props.text}
      </span>
    </div>
  );
};

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  completeTodo: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  isComplete: PropTypes.bool.isRequired,
};

export default Todo;
