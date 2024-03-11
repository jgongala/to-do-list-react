import React from "react";
// Importing Todo component
import Todo from "./Todo";

// ToDoList component for displaying and managing the list of todos
const ToDoList = ({ todos, setTodos, filteredTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {/* Mapping through filteredTodos to render individual Todo items */}
        {filteredTodos.map((todo) => (
          <Todo
            key={todo.id}
            text={todo.text}
            setTodos={setTodos}
            todos={todos}
            todo={todo}
          />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
