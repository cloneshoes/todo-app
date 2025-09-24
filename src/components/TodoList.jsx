import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, deleteTodo }) {
  if (todos.length === 0) {
    return <p>No tasks yet. Add one above 👆</p>;
  }

  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          index={index}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;
