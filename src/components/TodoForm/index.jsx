import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "../../store/Todo/todoSlice";

import style from "./style.module.css";

const { todo_header, todo_input, btn_add, toggle_add } = style;

const TodoForm = () => {
  
  const [inputValue, setValue] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const value = inputValue.trim();

    if (value === "") {
      alert("Silahkan masukan aktivitas...");
      return false;
    }

    dispatch(createTodo(value));
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


export default TodoForm;
