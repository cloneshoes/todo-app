import React from "react";

function TodoInput({ input, setInput, addTodo }) {
  return (
    <div className="todo-input"
      onSubmit={(e) => {
        e.preventDefault();
        addTodo();
      }}
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a task..."
      />
      <button type="submit" onClick={addTodo}>Add</button>
    </div>
  );
}

export default TodoInput;
