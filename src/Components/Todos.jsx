import React from "react";
import Todo from "./Todo";

const Todos = (props) => {
  const todos = [
    {
      text: "Belajar React",
    },
    {
      text: "Belajar Hooks React ",
    },
    {
      text: "Belajar Props React",
    },
    {
      text: "Belajar State React",
    },
    {
      text: "Belajar Component React",
    },
    {
      text: "Belajar Component React",
    },
    {
      text: "Belajar Component React",
    },
    {
      text: "Belajar Component React",
    },
    {
      text: "Belajar Component React",
    },
  ];

  return (
    <section className="todos">
      {todos.map((todo) => {
        return <Todo text={todo.text} />;
      })}
    </section>
  );
};

export default Todos;
