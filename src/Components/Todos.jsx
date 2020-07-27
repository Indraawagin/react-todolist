import React from "react";
import Todo from "./Todo";

const Todos = (props) => {
  return (
    <section className="todos">
      {props.todos.map((todo) => {
        return <Todo text={todo.text} />;
      })}
    </section>
  );
};

export default Todos;
