import React from "react";
import TodoItem from "./TodoItem";
import EditTodo from "./EditTodo";

function TodoList({ todos, deleteTodo, editTodo }) {
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
          editTodo={editTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;
