import React from "react";

function TodoInput({ input, setInput, addTodo }) {
  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add Task"
      />
      <button onClick={addTodo}>Add</button>
    </div>
  );
}

export default TodoInput;
