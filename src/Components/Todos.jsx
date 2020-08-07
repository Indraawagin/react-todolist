import React from "react";
import Todo from "./Todo";
import PropTypes from "prop-types";

const Todos = (props) => {
  return (
    <section className="todos">
      {props.todos.length > 0 &&
        props.todos.map((todo, index) => {
          return (
            <Todo
              key={index}
              text={todo.text}
              isComplete={todo.isComplete}
              completeTodo={props.completeTodo}
              index={index}
            />
          );
        })}
      {props.todos.length === 0 && (
        <div className="todo-placeholder-text">
          Add todo by clicking{" "}
          <span className="add-button-placeholder-text">Add</span> button on the
          top left corner
        </div>
      )}
    </section>
  );
};

Todos.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      isComplete: PropTypes.bool,
    })
  ),
  completeTodo: PropTypes.func.isRequired,
};

export default Todos;
