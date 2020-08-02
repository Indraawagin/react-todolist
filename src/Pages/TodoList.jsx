import React, { useState } from "react";
import Paper from "../Components/Paper";
import Header from "../Components/Header";
import TodoForm from "../Components/TodoForm";
import Todos from "../Components/Todos";

const TodoList = (props) => {
  //TODO: Hooks Todo List
  const [todos, setTodos] = useState([
    { text: "Learning React" },
    { text: "Learning React Hooks" },
    { text: "Learning styling in React" },
  ]);

  //TODO: Hooks Show Add Todo Form
  const [showAdd, setShowAdd] = useState(false);

  //TODO: <TodoForm addTodo={addTodo} />
  const addTodo = (value) => {
    if (todos.length >= 10) {
      alert("MaximumTodos");
    } else {
      const addedTodo = [...todos, { text: value }];
      setTodos(addedTodo);
    }
  };

  //Todo: <Header showAddToogle={showAddToggle} />
  const showAddToggle = () => setShowAdd(!showAdd);

  //Todo: {addForm}
  let addForm = null;
  if (showAdd) {
    addForm = (
      <div>
        <TodoForm addTodo={addTodo} />
      </div>
    );
  }

  console.log("Todos", todos);

  return (
    <Paper>
      <Header showAddToogle={showAddToggle} showAdd={showAdd} />
      {addForm}
      <Todos todos={todos} />
    </Paper>
  );
};

export default TodoList;
