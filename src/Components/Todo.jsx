import React from "react";
import PropTypes from "prop-types";

const Todo = (props) => {
  return (
    <div className="todo" onClick={() => props.completeTodo(props.index)}>
      <span
        style={{
          textDecoration: props.isComplete ? "line-through" : "initial",
        }}
        className="todo-text"
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
