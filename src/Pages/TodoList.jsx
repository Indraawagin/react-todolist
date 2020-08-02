import React, { useState } from "react";
import Paper from "../Components/Paper";
import Header from "../Components/Header";
import TodoForm from "../Components/TodoForm";
import Todos from "../Components/Todos";

const TodoList = (props) => {
  //TODO: Hooks Todo List
  const [todos, setTodos] = useState([
    { text: "Learning React", isComplete: false },
    { text: "Learning React Hooks", isComplete: false },
    { text: "Learning styling in React", isComplete: false },
  ]);

  //TODO: Hooks Show Add Todo Form
  const [showAdd, setShowAdd] = useState(false);

  //TODO: <TodoForm addTodo={addTodo} />
  const addTodo = (value) => {
    if (todos.length >= 10) {
      alert("MaximumTodos");
    } else {
      const addedTodo = [...todos, { text: value, isComplete: false }];
      setTodos(addedTodo);
    }
  };

  // todo: completeTodo={completeTodo}
  const completeTodo = (index) => {
    const addedTodo = [...todos];
    addedTodo[index].isComplete = !addedTodo[index].isComplete;
    setTodos(addedTodo);
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

  console.log("CompleteTodo", todos);

  return (
    <Paper>
      <Header showAddToogle={showAddToggle} showAdd={showAdd} />
      {addForm}
      <Todos todos={todos} completeTodo={completeTodo} />
    </Paper>
  );
};

export default TodoList;
