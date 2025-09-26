import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, deleteTodo, editTodo }) {
  if (!todos || todos.length === 0) {
    return <p>No tasks yet. Add one above 👆</p>;
  }

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;
