import React from "react";
import { useState } from "react";
import EditTodo from "./EditTodo";

function TodoItem({ todo, index, deleteTodo, editTodo }) {
   const [isEditing, setIsEditing] = useState(false);

  return (
    <li>
      {isEditing ? (
        <EditTodo
          currentValue={todo}
          onSave={(newValue) => {
            editTodo(index, newValue);
            setIsEditing(false);
          }}
          onCancel={() => setIsEditing(false)}
        />
      ) : (
        <>
          {todo}
          <button onClick={() => deleteTodo(index)}>Delete</button>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
    </li>
  );
}

export default TodoItem;