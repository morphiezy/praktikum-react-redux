import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1648471023698,
    name: "Belajar React JS",
    complete: false,
    create: "18-13-2022",
  },
  {
    id: 1648471042170,
    name: "Belajar Tailwind CSS",
    complete: false,
    create: "18-13-2022",
  },
];


const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    createTodo: (state, action) => {
      const date = new Date();
      const currentDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;

      state.unshift({
        id: date.getTime(),
        name: action.payload,
        complete: false,
        create: currentDate,
      });
    },
    deleteTodo: (state,action) => {
        const id = action.payload;
        return state.filter(todo => todo['id'] !== id);
    },
    completeTodo : (state,action) => {
        const id = action.payload;
        return state.map(todo => todo.id === id ? {...todo, complete : !todo.complete} : todo)
    }
  },
});


export const { createTodo,deleteTodo,completeTodo } = todoSlice.actions;
export const { reducer } = todoSlice;
