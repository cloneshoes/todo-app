import React, { useEffect, useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import './App.css';

function App() {
  // todos will be objects: { id, text }
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  // If there were any string todos (from previous version),
  // convert them into objects once on mount.
  useEffect(() => {
    if (todos.length > 0 && typeof todos[0] === "string") {
      setTodos((prev) =>
        prev.map((t, i) => ({ id: Date.now() + i, text: String(t) }))
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // run once

  const addTodo = () => {
    if (input.trim() === "") return;
    setTodos((prev) => [...prev, { id: Date.now(), text: input }]);
    setInput("");
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  const editTodo = (id, newText) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, text: newText } : t))
    );
  };

  return (
    <div className="todo-container">
      <h1>Todo App</h1>
      <TodoInput input={input} setInput={setInput} addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} />
    </div>
  );
}

export default App;
