import React, { useState } from "react";
import EditTodo from "./EditTodo";
import '../App.css';

function TodoItem({ todo, deleteTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <li className="todo-item">
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
          <button className="edit" onClick={() => setIsEditing(true)}>Edit</button>{" "}
          <button className="delete" onClick={() => deleteTodo(todo.id)}>Delete</button>
        </>
      )}
    </li>
  );
}

export default TodoItem;
