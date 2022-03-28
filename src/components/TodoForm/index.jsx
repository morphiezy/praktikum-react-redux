import { useState } from "react";
import { connect } from "react-redux";
import { createTodo } from "../../store/todoSlice";

import style from "./style.module.css";

const { todo_header, todo_input, btn_add, toggle_add } = style;

const TodoForm = ({ createTodo }) => {
  const [inputValue, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const value = inputValue.trim();

    if (value === "") {
      alert("Silahkan masukan aktivitas...");
      return false;
    }

    createTodo(value);
    return setValue("");
  };

  return (
    <form action="#" onSubmit={handleSubmit}>
      <div className={todo_header}>
        <input
          type="text"
          onChange={(e) => setValue(e.target.value)}
          value={inputValue}
          className={todo_input}
          placeholder="Input your todo..."
        />
        <label>
          <input type="button" value="" className={btn_add} />
          <button className={toggle_add}>+</button>
        </label>
      </div>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    createTodo: (value) => dispatch(createTodo(value)),
  };
};

export default connect(null, mapDispatchToProps)(TodoForm);
