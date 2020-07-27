import React from "react";
import Paper from "../Components/Paper";
import Header from "../Components/Header";
import TodoForm from "../Components/TodoForm";
import Todos from "../Components/Todos";

const TodoList = (props) => {
  return (
    <Paper>
      <Header />
      <TodoForm />
      <Todos />
    </Paper>
  );
};

export default TodoList;
