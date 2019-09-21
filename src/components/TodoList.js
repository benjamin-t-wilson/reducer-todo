import React, { useState, useReducer } from "react";
import { initialState, reduceTodo } from "../reducers/reducers.js";
import Todo from "./Todo.js";

const TodoList = () => {
  const [state, dispatch] = useReducer(reduceTodo, initialState);
  const [todo, setTodo] = useState("");

  const handleChanges = event => {
    return setTodo(event.target.value);
  };
  return (
    <>
      <div className="form">
        <form
          onSubmit={event => {
            event.preventDefault();
            dispatch({ type: "ADD_TODO", payload: todo });
            setTodo("");
          }}
        >
          <label htmlFor="item">Add New Item:</label>
          <input
            type="text"
            name="item"
            placeholder="What needs done?"
            value={todo}
            onChange={handleChanges}
          />
          <button>Submit</button>
        </form>
      </div>
      <div className="todoList">
        {state.map(cv => {
          return <Todo data={cv} key={cv.id} />;
        })}
      </div>
    </>
  );
};

export default TodoList;
