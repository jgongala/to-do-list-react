import React from "react";

// Form component for adding new todos
const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => {
  // Function to handle input text changes
  const inputTextHandler = (e) => {
    // Update the input text in the state
    setInputText(e.target.value);
  };

  // Function to handle form submission
  const submitTodoHandler = (e) => {
    e.preventDefault();
    // Add a new todo to the todos array with a unique id
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    // Clear the input text after submitting
    setInputText("");
  };

  // Function to handle status (filter) changes
  const statusHandler = (e) => {
    // Update the status in the state
    setStatus(e.target.value);
  };

  return (
    <form>
      {/* Input for adding new todos */}
      <input
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
        value={inputText}
      />
      {/* Button to submit new todos */}
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      {/* Dropdown for selecting todo status (All, Completed, Uncompleted) */}
      <div className="select">
        <select name="todos" className="filter-todo" onChange={statusHandler}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
