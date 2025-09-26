import React, { useState } from "react";

function EditTodo({ todo, onSave, onCancel }) {
  // todo is an object { id, text }
  const [newText, setNewText] = useState(todo?.text ?? "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newText.trim() === "") return;
    onSave(todo.id, newText);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "inline" }}>
      <input
        type="text"
        value={newText}
        onChange={(e) => setNewText(e.target.value)}
      />
      <button type="submit">Save</button>
      <button type="button" onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
}

export default EditTodo;
