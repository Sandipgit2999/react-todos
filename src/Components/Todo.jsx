import React, { useState } from "react";
import styles from "./todo.module.css";

const Todo = () => {
  const [newTodo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const handlechange = (e) => {
    setTodo(e.target.value);
  };

  return (
    <>
      <div className={styles.main}>
        <input
          className={styles.main_inputth}
          type="text"
          placeholder="Write Somthing here"
          onChange={handlechange}
        />
        <button
          onClick={() => {
            setTodos([...todos, { value: newTodo }]);
            setTodo("");
          }}
        >
          +
        </button>
      </div>
      <div className={styles.main}>
        {todos.map((todo) => (
          <div className={styles.main_input}>
            {todo.value}{" "}
            <div className={styles.dot}>
              <div className={styles.dit}></div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Todo;
