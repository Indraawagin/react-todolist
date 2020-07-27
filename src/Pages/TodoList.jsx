import React, { useState } from "react";
import Paper from "../Components/Paper";
import Header from "../Components/Header";
import TodoForm from "../Components/TodoForm";
import Todos from "../Components/Todos";

const TodoList = (props) => {
  const [todos, setTodos] = useState([
    { text: "Learning React" },
    { text: "Learning React Hooks" },
    { text: "Learning styling in React" },
  ]);
  return (
    <Paper>
      <Header />
      <TodoForm />
      <Todos todos={todos} />
    </Paper>
  );
};

export default TodoList;
