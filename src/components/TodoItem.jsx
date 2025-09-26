import React, { useState } from "react";
import EditTodo from "./EditTodo";

function TodoItem({ todo, deleteTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <li style={{ marginBottom: 8 }}>
      {isEditing ? (
        <EditTodo
          todo={todo}
          onSave={(id, newText) => {
            editTodo(id, newText);
            setIsEditing(false);
          }}
          onCancel={() => setIsEditing(false)}
        />
      ) : (
        <>
          <span>{todo.text}</span>{" "}
          <button onClick={() => setIsEditing(true)}>Edit</button>{" "}
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </>
      )}
    </li>
  );
}

export default TodoItem;
