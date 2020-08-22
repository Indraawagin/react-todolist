import React from "react";
import Todo from "../todo/Todo";
import PropTypes from "prop-types";
import styles from "./Todos.module.css";

const Todos = (props) => {
  return (
    <section className={styles.todos}>
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
        <div className={styles.todoPlaceholderText}>
          Add todo by clicking{" "}
          <span className={styles.addButtonPlaceholderText}>Add</span> button on
          the top left corner
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
