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
    <form onSubmit={handleSubmit} className="edit-form">
      <input
        type="text"
        className="edit-input"
        value={newText}
        onChange={(e) => setNewText(e.target.value)}
      />
      <button type="submit"  className="save-btn">Save</button>
      <button type="button" className="cancel-btn" onClick={onCancel}> 
        Cancel
      </button>
    </form>
  );
}

export default EditTodo;
