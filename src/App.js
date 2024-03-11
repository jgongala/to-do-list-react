import React, { useState, useEffect } from "react";
import "./App.css";
// Importing components
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";

function App() {
  // State for the input text in the form
  const [inputText, setInputText] = useState("");
  // State for the list of todos
  const [todos, setTodos] = useState([]);
  // State for the filter status (all, completed, uncompleted)
  const [status, setStatus] = useState("all");
  // State for the filtered todos based on status
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    getLocalTodos();
  }, []);

  // useEffect to run filterHandler whenever todos or status change
  useEffect(() => {
    // Function to filter todos based on status
    const filterHandler = () => {
      switch (status) {
        case "completed":
          setFilteredTodos(todos.filter((todo) => todo.completed === true));
          break;
        case "uncompleted":
          setFilteredTodos(todos.filter((todo) => todo.completed === false));
          break;
        default:
          setFilteredTodos(todos);
          break;
      }
      saveLocalTodos();
    };
    filterHandler();
  }, [todos, status]);

  const saveLocalTodos = () => {
    if (todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>To-Do List</h1>
      </header>
      {/* Form component for adding new todos */}
      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      {/* ToDoList component to display and manage the list of todos */}
      <ToDoList
        setTodos={setTodos}
        todos={todos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
