import React, { useState } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import EditTodo from './components/EditTodo';

function App() {
// Step 1: Create state for Todos
const [todos, setTodos] = useState([]);
const [input, setInput] = useState("");


// step 2: Function to add todo
const addTodo = () => {
  if (input.trim() === "") return; // ignore empty input
  setTodos([...todos, input]); // add new todo
  setInput(""); // clear input
};

// Delete a todo
const deleteTodo = (index) => {
  const newTodos = todos.filter((_, i) => i !== index);
  setTodos(newTodos);
};

return (
  <div style={{padding: "20px"}}>
<h1>Todo App</h1>

<TodoInput input={input} setInput={setInput} addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} />

     
  </div>
)};

export default App
