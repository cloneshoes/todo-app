import React from "react";
import TodoItem from "./TodoItem";
import '../App.css';

function TodoList({ todos, deleteTodo, editTodo }) {
  if (!todos || todos.length === 0) {
    return <p>No tasks yet. Add one above 👆</p>;
  }

  return (
    <ul className="todo-list">
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
